import React, { useState } from 'react';

function Predictor() {
    const [companyName, setCompanyName] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/model/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ file: `./${companyName}.csv` }) // Correct format for file name
            });

            if (response.ok) {
                console.log('File name submitted successfully');
                const data = await response.json();
                setPrediction(data.prediction);
            } else {
                console.error('Failed to submit file name');
                setError('Failed to submit file name');
            }
        } catch (error) {
            console.error('Error submitting file name:', error);
            setError('Error submitting file name');
        }
    };

    const handleChange = (e) => {
        setCompanyName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="company name"
                    className='border-2 solid black'
                    value={companyName}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {prediction !== null && (
                <div>
                    <h2>Prediction:</h2>
                    <p>Action: {prediction.Action}</p>
                    <p>Current Stock Price: {prediction["Current Stock Price"]}</p>
                    <p>Predicted Stock Price: {prediction["Predicted Stock Price"]}</p>
                    <p>Accuracy Score: {prediction["Accuracy Score"]}</p>
                    <p>Mean Squared Error: {prediction["Mean Squared Error"]}</p>
                </div>
            )}

            {error && <p>Error: {error}</p>}
        </div>
    );

}

export default Predictor;
