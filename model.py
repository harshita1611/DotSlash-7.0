import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error as mse
from sklearn.metrics import r2_score


def predict_price(file):
    data = pd.read_csv(file)
    df = pd.DataFrame(data)
    df['Date'] = pd.to_datetime(df['Date'])
    df = df.sort_values('Date')  # Sort the DataFrame by date in ascending order
    df.set_index('Date', inplace=True)

    # Function to calculate Relative Strength Index (RSI)
    def calculate_rsi(close_prices, period=14):
        diff = np.diff(close_prices)
        gain = np.where(diff > 0, diff, 0)
        loss = np.where(diff < 0, -diff, 0)

        avg_gain = np.mean(gain[:period])
        avg_loss = np.mean(loss[:period])

        for i in range(period, len(close_prices)-1):
            avg_gain = ((period - 1) * avg_gain + gain[i]) / period
            avg_loss = ((period - 1) * avg_loss + loss[i]) / period

        rs = avg_gain / avg_loss
        rsi = 100 - (100 / (1 + rs))
        return rsi

    # Function to calculate Williams %R
    def calculate_williams_percent_r(high_prices, low_prices, close_prices, period=14):
        lowest_low = pd.Series(low_prices.rolling(window=period, min_periods=1).min(), index=low_prices.index)
        highest_high = pd.Series(high_prices.rolling(window=period, min_periods=1).max(), index=high_prices.index)

        williams_percent_r = (highest_high - close_prices) / (highest_high - lowest_low) * -100
        return williams_percent_r
    df['RSI'] = calculate_rsi(df['4. close'])
    df['Williams %R'] = calculate_williams_percent_r(df['2. high'], df['3. low'], df['4. close'])

    # Define target variable
    df['Target'] = df['4. close'].shift(-1)

    # Drop rows with NaN values
    df.dropna(inplace=True)

    # Split data into features (X) and target variable (y)
    X = df[['RSI', 'Williams %R']]
    y = df['Target']

    # Perform train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the random forest regression model on the training set
    model = RandomForestRegressor() 
    model.fit(X_train, y_train)

    # Make predictions on the test set
    predictions = model.predict(X_test)

    # Use the trained model to predict the stock price on the last row
    input_data = df.iloc[-1][['RSI', 'Williams %R']].values.reshape(1, -1)
    predicted_price = model.predict(input_data)[0]

    # Determine the action: Buy, Sell, or Hold
    if predicted_price > y_test.iloc[-1] :
        action = 'Buy'
    elif predicted_price < y_test.iloc[-1]:
        action = 'Sell'
    else:
        action = 'Hold'

    # Print the result
    # print("Action:", action)
    # print("Current Stock Price:", y_test.iloc[-1])
    # print("Predicted Stock Price:", predicted_price)
    # print("Accuracy Score:", r2_score(y_test, predictions))
    # print("Mean Squared Error:", mse(y_test, predictions))
    data = {
        "Action": action,
        "Current Stock Price": y_test.iloc[-1],
        "Predicted Stock Price": predicted_price,
        "Accuracy Score": r2_score(y_test, predictions),
        "Mean Squared Error": mse(y_test, predictions)
    }
    return data