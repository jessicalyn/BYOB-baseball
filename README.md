# Build Your Own Backend - MLB Baseball edition

## Overview:

Build Your Own Backed (BYOB) is a solo project at the Turing School of Software and Design. As Front-End Developers this project is designed to give us experience building databases using Express, Knex, and PostgreSQL, and building a RESTful API.

This app is deployed to Heroku:

[More information about original assignment can be found here](http://frontend.turing.io/projects/build-your-own-backend.html)

## API Documentation:

Welcome to the BYOB MLB Baseball edition API! This documentation should familiarize you with the resources available and how to consume them with HTTP requests. 

### Root URL
The Root URL for BYOB Baseball is localhost:3000 The documentation below requires prepending the Root URL to the endpoints in order to fulfill the requests.

### Authentication
BYOB Baseball is an open API and does not require authentication to query and get data.

### JSON Encoding
JSON is the data format provided by BYOB Baseball.

### Root Endpoint
The Root URL provides all information on all available endpoints within the BYOB Baseball API.

#### Example Request:
```localhost:3000```

#### Example Response:
```
   HTTP/1.0 200 OK
   Content-Type: application/json
   {
      "divisions": "localhost:3000/api/v1/divisions"
      "teams": "localhost:3000/api/v1/teams"
   } 
   ```
#### Attributes:
- ```divisions``` string -- The URL root for the Divisions endpoint
- ```teams``` string -- The URL root for the Teams endpoint

### Divisions Endpoint
The Divisions endpoint provides information about all the Divisions in Major League Baseball or a specific division.

#### Example Request:
```localhost:3000/api/v1/divisions/1```

#### Example Response:
```
[
    {
        "id": 1,
        "name": "AL East",
        "league": "American League",
        "created_at": "2019-05-01T17:34:24.348Z",
        "updated_at": "2019-05-01T17:34:24.348Z"
    }
]
```

## Installation:

These instructions will get a copy of the project up and running on your local machine for usage and testing purposes.

### Backend
clone down the repo: ```$ git clone https://github.com/jessicalyn/BYOB-baseball```

cd into directory and run npm install: ``` $ npm install ```

launch in your browser: ``` $ npm start ```

## Future Development and Extensions Notes:


### Technologies Used
BYOB - MLB Baseball Edition was built using: 
- Express
- Knex
- PostgreSQL

## Credits
Credit for this project goes to: 
- [Jessica Hansen](https://github.com/jessicalyn)
