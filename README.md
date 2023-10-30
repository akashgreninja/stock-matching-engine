# Stock Matching Engine

This project is a Stock Matching Engine built using Nest.js, Postgresql, and Redis. It handles the placement of buy and sell orders, matching these orders based on a set of predefined rules, and updating the database with the transaction details.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Nest.js
- Postgresql
- Redis

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dekkaladiwakar/stock-matching-engine.git
```

2. Change to the project directory:

```bash
cd stock-matching-engine
```

3. Install the dependencies:

```bash
npm install
```

4. Copy the `.env.example` file to a new file named `.env` and update the environment variables to match your local setup:

```bash
cp .env.example .env
```

5. Start the development server:

```bash
npm run start:dev
```

## Usage

Once the server is running, you can access the API documentation at:

```plaintext
http://localhost:<port>/api-docs
```

## Key Features

- **Order Handling**: Accepts buy and sell orders, storing them in Redis for efficient access and processing.
- **Matching Logic**: Applies a matching logic to pair buy and sell orders based on price and time priority rules.
- **Event-Driven Architecture**: Utilizes an event emitter and listener to trigger the matching logic upon receiving new orders.
- **Database Updates**: Records transaction details, updates stock prices, and order statuses in Postgresql.

## Matching Logic

- Prioritize the highest priced Buy Order (BO) and the lowest priced Sell Order (SO).
- If the price of BO is greater than or equal to the price of SO, compare the timestamps of BO and SO, and execute the trade at the price of the earliest order.
