# Dog Facts API

## Description

This API provides random facts about dogs. It's built with Node.js and Express.js.

## Installation

To install the required dependencies for this project, make sure you have Node.js and npm (Node Package Manager) installed on your system. Then, run the following command in your terminal:

```bash
npm install


# Running the Server
npm start

# API Endpoints
## GET /facts
Returns an array of dog facts.

Parameters:
number (optional): An integer specifying the number of dog facts to return.
Response:
facts: An array of string facts about dogs.
success: A boolean indicating the success of the operation.

## Example Request:
GET http://localhost:3000/facts?number=3

Example Response:
{
  "facts": [
    "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens.",
    "Ancient Egyptians revered their dogs.",
    "Small quantities of grapes and raisins can cause renal failure in dogs."
  ],
  "success": true
}

Example Error Response:
{
  "message": "Invalid number of requests",
  "success": false
}

