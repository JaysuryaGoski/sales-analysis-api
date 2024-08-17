Sales Analysis REST API  
This project is a Node.js REST API built for analyzing sales data based on business requirements. It processes customer orders from  JSON files and provides insights such as weekly sales, percentage changes, and business improvement trends.  

Features
List Unique Customers with Total Order Value:
Returns a list of customers along with their address and the total value of their orders.

Week-wise Sales Based on Customer Type:
Provides weekly sales grouped by customer type (Retail or Wholesale).

Date with Highest Business:
Displays the date on which the business made the highest sales.

Percentage Change in Business Between Weeks:
Shows the percentage increase or decrease in sales from one week to the next.

Business Improvement Week After Week:
Indicates whether the business has shown consistent improvement in weekly sales.

Folder Structure

sales-analysis-api
│
├── data
│   ├── address.json
│   └── order.json
│
├── src
│   ├── controllers
│   │   ├── salesController.js
│   ├── routes
│   │   ├── salesRoutes.js
│   ├── utils
│   │   ├── dateUtils.js
│   │   ├── calculationUtils.js
│   ├── app.js
│
├── package.json
├── README.md
Prerequisites
Node.js (v14 or above)
npm (v6 or above)
Getting Started
Clone the repository:

git clone https://github.com/JaysuryaGoski/sales-analysis-api.git
Navigate to the project directory:

cd sales-analysis-api
Install the required dependencies:

npm install
Run the server:

npm start
The server will run on http://localhost:8080.  

API Endpoints
1. List Unique Customers and Addresses with Total Order Value
URL: /customers

Method: GET

Response Example:

[
  {
    "CustomerID": "R2001",
    "FirstName": "Sudhanshu",
    "LastName": "Sharma",
    "Address": "12, MG Road, Sector 49",
    "City": "Noida",
    "TotalOrderValue": "$3,000,000"
  }
]
2. Week-wise Sales Based on Customer Type
URL: /sales/week-wise

Method: GET

Response Example:

{
  "Retail": [
    { "week1": "$10,000" },
    { "week2": "$12,500" }
  ],
  "Wholesale": [
    { "week1": "$15,000" },
    { "week2": "$18,000" }
  ]
}
3. Date with Highest Business
URL: /sales/highest-business-date

Method: GET

Response Example:


{
  "date": "03-04-2022",
  "totalSales": "$30,000,000"
}
4. Percentage Change in Business Between Weeks
URL: /sales/percentage-change

Method: GET

Response Example:

{
  "week1_to_week2": "+25%",
  "week2_to_week3": "+20%",
  "week3_to_week4": "-13.33%",
  "week4_to_week5": "+11.54%"
}
5. Business Improvement Week After Week
URL: /sales/improvement

Method: GET

Response Example:

{
  "week1": "$10,000",
  "week2": "$12,500",
  "week3": "$15,000",
  "week4": "$13,000",
  "week5": "$14,500",
  "improvement": true
}
Utilities
dateUtils.js: Handles date-related operations like calculating the week number from a date.
calculationUtils.js: Contains utility functions like calculating percentage change.
Running the Project
Run the development server:


npm start
Test the API using tools like Postman or cURL by hitting the endpoints mentioned above.