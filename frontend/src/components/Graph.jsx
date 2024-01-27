import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Papa from 'papaparse';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints: [],
    };
  }

  componentDidMount() {
    this.fetchCSVData();
  }
  
  fetchCSVData() {
    fetch('../src/components/AAPL.csv')
      .then((response) => response.text())
      .then((csvData) => {
        this.parseCSVData(csvData);
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
      });
  }
  
  parseCSVData(csvData) {
    Papa.parse(csvData, {
      header: true,
      dynamicTyping: (field) => (field === 'Date' ? false : true), 
      complete: (result) => {
        const dataPoints = result.data.map((row) => ({
          x: new Date(row.Date),
          y: [parseFloat(row['1. open']), parseFloat(row['2. high']), parseFloat(row['3. low']), parseFloat(row['4. close'])],
        }));
  
        console.log('Data Points:', dataPoints);
  
        this.setState({ dataPoints });
      },
    });
  }

  render() {
    const { dataPoints } = this.state;

    const options = {
      theme: 'light1',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Intel Corporation Stock Price - 2017',
      },
      axisX: {
        valueFormatString: 'YYYY-MM-DD',


      },
      axisY: {
        includeZero: false,
        prefix: '$',
        title: 'Price (in USD)',
      },
      data: [
        {
          type: 'area', // Change type to 'area' 
          showInLegend: false,
          name: 'Stock Price',
          dataPoints: dataPoints.map((point) => ({
            x: point.x,
            y: point.y[3], // Close price for the area chart
          })),
        },
        {
          type: 'line', // Add a line series for the closing prices
          showInLegend: true,
          name: 'Close Price',
          dataPoints: dataPoints.map((point) => ({
            x: point.x,
            y: point.y[3], // Closing price for the line chart
          })),
        },
      ],
    };

    return (
      <div>
        <h1>React Area and Line Chart</h1>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Graph;
