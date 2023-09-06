# Node weather API

API for registering keywords and current selectedCrypto in MongoDB.

## Version

1.0.0

## Usage

Install packages with `npm install`

## Start

Start application with `npm start`

## Endpoints

GET `/keywords` // Get all keywords registered from MongoDB collection: keywords.

GET `/keywords/save/:keyword` // Send keyword to MongoDB.

GET `/selectedValue` // Get all selected values in dropdown from MongoDB collection: selectedValue.

GET `/selectedValue/save/:cryptoCurrency` // Send selected crypto currency name to MongoDB.
