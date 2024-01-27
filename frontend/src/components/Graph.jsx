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
  
  componentDidUpdate(prevProps) {
    if (this.props.selectedTicker !== prevProps.selectedTicker) {
      this.fetchCSVData();
    }
  }
  
  fetchCSVData() {
    const { selectedTicker } = this.props;
    if (!selectedTicker) return;
    console.log(selectedTicker)
    fetch(`../public/datasets/daily/${selectedTicker}.csv`)
      .then((response) => response.text())
      .then((csvData) => {
        console.log(csvData)
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
        text: 'Stock Price',
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
          type: 'area',
          showInLegend: false,
          name: 'Stock Price',
          dataPoints: dataPoints.map((point) => ({
            x: point.x,
            y: point.y[3],
          })),
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Close Price',
          dataPoints: dataPoints.map((point) => ({
            x: point.x,
            y: point.y[3],
          })),
        },
      ],
    };

    return (
      <div className='mt-12'>
        
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Graph;
