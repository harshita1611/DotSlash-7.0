from model import predict_price
from flask import Flask, request, jsonify
from flask_cors import CORS

# predict_price('./intradays/TSLA_INTRADAY.csv')
app = Flask(__name__)
CORS(app)


# CORS(app, origins="*", methods=["GET", "POST"], headers=["Content-Type"])


@app.get('/')
def home():
    return {'message': 'Hello World!'}


# List of available CSV files
is_present = ["ADBE_aaj_ka.csv", "AMZN_aaj_ka.csv", "APA_aaj_ka.csv", "BBY_aaj_ka.csv", "CSCO_aaj_ka.csv",
               "EBAY_aaj_ka.csv", "FDX_aaj_ka.csv", "GOOG_aaj_ka.csv", "HMC_aaj_ka.csv", "HSY_aaj_ka.csv",
               "IBM_aaj_ka.csv", "INFY_aaj_ka.csv", "INTC_aaj_ka.csv", "JPM_aaj_ka.csv", "META_aaj_ka.csv",
               "MRVL_aaj_ka.csv", "MSFT_aaj_ka.csv", "NFLX.csv", "NVDA_aaj_ka.csv", "SBUX_aaj_ka.csv",
               "TM_aaj_ka.csv", "UBER_aaj_ka.csv", "WIT_aaj_ka.csv", "WMT_aaj_ka.csv", "cost_co_aaj_ka.csv"]

# Function to check if the given ticker is present in the list of available CSV files
def is_ticker_present(ticker):
    for file in is_present:
        if ticker.lower() in file.lower():
            return True
    return False


@app.post('/api/model/predict')
def predict():
    file = request.json['file']
    prediction = predict_price(file)
    return jsonify({'prediction': prediction})
