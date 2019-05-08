# Build Your Own Backend - MLB Baseball edition

Build Your Own Backed (BYOB) is a solo project at the Turing School of Software and Design. As Front-End Developers this project is designed to give us experience building databases using Express, Knex, and PostgreSQL, and building a RESTful API. [More information about original assignment can be found here](http://frontend.turing.io/projects/build-your-own-backend.html)

This app is deployed to Heroku:

## API Documentation:

Welcome to the BYOB MLB Baseball edition API! This documentation should familiarize you with the resources available and how to consume them with HTTP requests. 

### Root URL
The Root URL for BYOB Baseball is localhost:3000 The documentation below requires prepending the Root URL to the endpoints in order to fulfill the requests.

### Divisions Endpoints
The Divisions endpoints provide information about all the Divisions in Major League Baseball or a specific division. You can also create a new Division.

#### Endpoints:
- ```/api/v1/divisions``` -- GET data for all Divisions
- ```/api/v1/divisions/:id``` -- GET data for a specific Division 
- ```/api/v1/divisions``` -- POST add a new Division

#### GET ```/api/v1/divisions```
This endpoint returns all Divisions data.

##### Example Request:
```localhost:3000/api/v1/divisions```

##### Attributes:
- ```id``` *number* -- ID for the specific Division
- ```name``` *string* -- Name for the specific Division
- ```league``` *string* -- League for the specific Division
- ```created_at``` *date* -- Date the entry for the specific Division was created
- ```updated_at``` *date* -- Date the entry for the specific Division was last updated

#### GET ```/api/v1/divisions/:id```
This endpoint returns all data for a specific Division. 

##### Example Request:
```localhost:3000/api/v1/divisions/1```
Required parameters: division id.

##### Example Response:
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

##### Attributes:
- ```id``` *number* -- ID for the specific Division
- ```name``` *string* -- Name for the specific Division
- ```league``` *string* -- League for the specific Division
- ```created_at``` *date* -- Date the entry for the specific Division was created
- ```updated_at``` *date* -- Date the entry for the specific Division was last updated

#### POST ```/api/v1/divisions```
This endpoint allows you to create a new Division.

#### Example Request:
```localhost:3000/api/v1/divisions```
Required parameters: name and league.

#### Example Response:
```
  { "id": 8 }
```

### Teams Endpoints
The Teams endpoints provide information about all the Teams in Major League Baseball or a specific team.

#### Endpoints:
- ```/api/v1/teams``` -- GET data for all Teams
- ```/api/v1/teams/:id``` -- GET data for a specific Team 
- ```/api/v1/divisions/:id/teams``` -- GET all teams for a specific Division
- ```/api/v1/teams``` -- POST add a new Team
- ```/api/v1/teams/:id``` -- DELETE an existing Team

#### GET ```/api/v1/teams```
This endpoint returns all Teams data.

##### Example Request:
```localhost:3000/api/v1/teams```

##### Attributes:
- ```name``` *string* -- Name for the specific Team
- ```stadium_name``` *string* -- Stadium Name for the specific Team
- ```website``` *string* -- Website for the specific Team
- ```division_id``` *number* -- Division ID for the specific Team's Division
- ```created_at``` *date* -- Date the entry for the specific Team was created
- ```updated_at``` *date* -- Date the entry for the specific Team was last updated
- ```division_name``` *string* -- Division Name for the specific Team

#### GET ```/api/v1/teams/:id```
This endpoint returns all data for a specific Team.

##### Example Request:
```localhost:3000/api/v1/teams/8```

##### Example Response:
```
[
  {
    "id": 8,
    "name": "Chicago White Sox",
    "stadium_name": "Guaranteed Rate Field",
    "website": "www.whitesox.com",
    "division_id": 2,
    "created_at": "2019-05-01T17:34:24.367Z",
    "updated_at": "2019-05-01T17:34:24.367Z",
    "division_name": "AL Central"
  }
]
```

##### Attributes:
- ```name``` *string* -- Name for the specific Team
- ```stadium_name``` *string* -- Stadium Name for the specific Team
- ```website``` *string* -- Website for the specific Team
- ```division_id``` *number* -- Division ID for the specific Team's Division
- ```created_at``` *date* -- Date the entry for the specific Team was created
- ```updated_at``` *date* -- Date the entry for the specific Team was last updated
- ```division_name``` *string* -- Division Name for the specific Team

#### GET ```/api/v1/divisions/:id/teams```
This endpoint returns all Teams for a specific Division.

##### Example Request:
```localhost:3000/api/v1/divisions/4/teams```

##### Attributes:
- ```name``` *string* -- Name for the specific Team
- ```stadium_name``` *string* -- Stadium Name for the specific Team
- ```website``` *string* -- Website for the specific Team
- ```division_id``` *number* -- Division ID for the specific Team's Division
- ```created_at``` *date* -- Date the entry for the specific Team was created
- ```updated_at``` *date* -- Date the entry for the specific Team was last updated
- ```division_name``` *string* -- Division Name for the specific Team

#### POST ```/api/v1/teams```
This endpoint allows you to create a new Team.

##### Example Request:
```localhost:3000/api/v1/teams```
Required parameters: name, stadium_name, website, division id.

##### Example Response:
```
  { "id": 32 }
```

#### DELETE ```/api/v1/teams/:id```
This endpoint allows you to delete a specific Team.

##### Example Request:
```localhost:3000/api/v1/teams/:id```

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
