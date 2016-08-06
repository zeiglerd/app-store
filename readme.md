## Semantic Versioning
http://semver.org/


---


## Installation
Install all dependencies
```
npm i
```
Install all command line tools
```
npm i -g nodemon mocha
```


---


## Start the server
To run the server with default settings return
```
npm start
```


---


## Run the unit tests
To run the unit test
```
npm test
```


---


## Routes


#### ToC
| Link | Method | Route | Response |
|---|---|---|---|
| http://localhost:3000/api/v1/apps | POST | /api/v1/apps | [Response](#post-apps) |
| http://localhost:3000/api/v1/apps/:id | GET | /api/v1/apps/:id | [Response](#get-appsid) |
| http://localhost:3000/api/v1/users/:id/apps | GET | /api/v1/users/:id/apps | [Response](#get-usersidapps) |
| http://localhost:3000/api/v1/apps | GET | /api/v1/apps | [Response](#get-apps) |
| http://localhost:3000/api/v1/apps/:id | POST | /api/v1/apps/:id | [Response](#post-appsid) |
| http://localhost:3000/api/v1/apps/:id | DELETE | /api/v1/apps/:id | [Response](#delete-appsid) |
| http://localhost:3000/api/v1/users | POST | /api/v1/users | [Response](#post-users) |
| http://localhost:3000/api/v1/users | GET | /api/v1/users | [Response](#get-users) |
| http://localhost:3000/api/v1/users/:id | GET | /api/v1/users/:id | [Response](#get-usersid) |
| http://localhost:3000/api/v1/users/:id | POST | /api/v1/users/:id | [Response](#post-usersid) |
| http://localhost:3000/api/v1/users/:id | DELETE | /api/v1/users/:id | [Response](#delete-usersid) |


---


#### GET /apps
[Back to ToC](#toc)
###### Description
Display all Apps
###### Example Response
```
{
  "data": [
    {
      "id": 1,
      "name": "App Title 1",
      "createdAt": "2016-08-06T04:56:28.000Z",
      "updatedAt": "2016-08-06T04:56:28.000Z"
    },
    {
      "id": 2,
      "name": "App Title 2",
      "createdAt": "2016-08-06T04:56:54.000Z",
      "updatedAt": "2016-08-06T04:56:54.000Z"
    }
  ],
  "status": 200
}
```


---


#### POST /apps
[Back to ToC](#toc)
###### Description
Create an App
###### Example Response
```
{
  "data": {
    "id": 1,
    "name": "App Title 2",
    "updatedAt": "2016-08-06T04:53:03.000Z",
    "createdAt": "2016-08-06T04:53:03.000Z"
  },
  "status": 200
}
```


---


#### DELETE /apps/:id
[Back to ToC](#toc)
###### Description
Delete App based upon id
###### Example Response
```
{
  "data": 1,
  "status": 200
}
```


---


#### GET /apps/:id
[Back to ToC](#toc)
###### Description
Display App based upon id
###### Example Response
```
{
  "data": {
    "id": 1,
    "name": "App Title 1",
    "createdAt": "2016-08-06T04:53:03.000Z",
    "updatedAt": "2016-08-06T04:53:03.000Z",
    "users": []
  },
  "status": 200
}
```


---


#### POST /apps/:id
[Back to ToC](#toc)
###### Description
Update App based upon id
###### Example Response
```
{
  "data": {
    "id": 1,
    "name": "App Title",
    "createdAt": "2016-08-06T04:53:03.000Z",
    "updatedAt": "2016-08-06T04:55:11.000Z"
  },
  "status": 200
}
```


---


#### GET /users/:id/apps
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```


---


#### POST /users
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```


---


#### GET /users
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```


---


#### GET /users/:id
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```


---


#### POST /users/:id
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```


---


#### DELETE /users/:id
[Back to ToC](#toc)
###### Description
.
###### Example Response
```
.
```
