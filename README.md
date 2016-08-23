## Semantic Versioning
http://semver.org/


---


## Installation

#### Production
1. Using command line, navigate to the root of the project.
2. Install all required dependencies, for this project:<br>
```
$ npm i
```
3. Create a directory -- in the root of this project -- in which log files will be stored.
```
$ mkdir logs
```
4. Create a file -- in the root of the project -- called, "*.env*" (without the quotes) and populate it, using this template:<br>
```
DB_HOST=
DB_NAME=
DB_PASS=
DB_PORT=
DB_SCHEMA=
DB_USER=
```
5. Using the previous template, give each of the Environment Variables a value.

#### Development
1. Follow the [Production Installation](#production).
2. Create a file -- in the root of the project -- called, "*.eslintrc.json*" (without the quotes) and populate it with this configuration:<br>
```json
{
	"env": {
		"node": true
	},
	"extends": "airbnb",
	"plugins": [
    "react"
  ],
	"rules": {
		"import/no-extraneous-dependencies": ["error", { "optionalDependencies": false, "peerDependencies": false }],
		"global-require": 0,
		"new-cap": 0,
		"prefer-template": 0
	},
	"globals": {
		"describe": true,
		"it": true,
		"afterEach": true,
		"beforeEach": true
	}
}
```
3. Install all command line tools:<br>
```
$ npm i -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react nodemon mocha
```
4. Optional: Install eslint for Atom:<br>
```
$ apm i linter-eslint
```

---


## Usage

#### Running the Server in the Default Production State
```
$ npm start
```

#### Running the Server in the Preferred Development State
- Use nodemon to listen for file updates:<br>
```
$ nodemon src/server.js
```

#### Unit Testing
- Use the following command to run each unit test:
  - Unit tests are located in the *test* folder, in the root of the project.<br>
```
$ npm test
```


---


## Deployment

...


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
```json
HTTP Response Status Code: 200 OK
JSON Response: [
  {
    "id": 1,
    "name": "App 1",
    "createdAt": "2016-08-06T05:16:19.000Z",
    "updatedAt": "2016-08-06T05:16:19.000Z"
  },
  {
    "id": 2,
    "name": "App 2",
    "createdAt": "2016-08-06T05:16:22.000Z",
    "updatedAt": "2016-08-06T05:16:22.000Z"
  }
]
```


---


#### POST /apps
[Back to ToC](#toc)
###### Description
Create an App
###### Example Response
```json
HTTP Response Status Code: 201 Created
JSON Response: {
  "id": 3,
  "name": "App 3",
  "updatedAt": "2016-08-06T05:16:52.000Z",
  "createdAt": "2016-08-06T05:16:52.000Z"
}
```


---


#### DELETE /apps/:id
[Back to ToC](#toc)
###### Description
Delete App based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: 1
```


---


#### GET /apps/:id
[Back to ToC](#toc)
###### Description
Display App based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: {
  "id": 2,
  "name": "App 2",
  "createdAt": "2016-08-06T05:16:22.000Z",
  "updatedAt": "2016-08-06T05:16:22.000Z",
  "users": []
}
```


---


#### POST /apps/:id
[Back to ToC](#toc)
###### Description
Update App based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: {
  "id": 2,
  "name": "App 4",
  "createdAt": "2016-08-06T05:16:22.000Z",
  "updatedAt": "2016-08-06T05:17:37.000Z"
}
```


---


#### GET /users/:id/apps
[Back to ToC](#toc)
###### Description
Find all apps for userId
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: [
  {
    "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    "title": "Best App Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": "2016-05-15T22:29:20.000Z",
    "createdAt": "2016-05-15T22:29:20.000Z",
    "updatedAt": "2016-05-15T22:29:20.000Z",
    "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman",
      "createdAt": "2016-05-15T22:29:20.000Z",
      "updatedAt": "2016-05-15T22:29:20.000Z"
    },
    "artAssets": [
      {
        "id": 1,
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
        "createdAt": "2016-05-15T22:29:20.000Z",
        "updatedAt": "2016-05-15T22:29:20.000Z",
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      },
      {
        "id": 2,
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
        "createdAt": "2016-05-15T22:29:20.000Z",
        "updatedAt": "2016-05-15T22:29:20.000Z",
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      }
    ]
  }
]
```


---


#### GET /users
[Back to ToC](#toc)
###### Description
Display all Users
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: [
  {
    "id": 1,
    "email": "user1@email.com",
    "name": "User 1",
    "createdAt": "2016-08-06T05:09:21.000Z",
    "updatedAt": "2016-08-06T05:09:21.000Z",
    "appId": null
  },
  {
    "id": 2,
    "email": "user2@email.com",
    "name": "User 2",
    "createdAt": "2016-08-06T05:09:35.000Z",
    "updatedAt": "2016-08-06T05:09:35.000Z",
    "appId": null
  }
]
```


---


#### POST /users
[Back to ToC](#toc)
###### Description
Create a User
###### Example Response
```json
HTTP Response Status Code: 201 Created
JSON Response: {
  "id": 3,
  "email": "user3@email.com",
  "name": "User 3",
  "updatedAt": "2016-08-06T05:09:46.000Z",
  "createdAt": "2016-08-06T05:09:46.000Z"
}
```


---


#### DELETE /users/:id
[Back to ToC](#toc)
###### Description
Delete User based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: 1
```


---


#### GET /users/:id
[Back to ToC](#toc)
###### Description
Display User based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: {
  "id": 2,
  "email": "user2@email.com",
  "name": "User 2",
  "createdAt": "2016-08-06T05:09:35.000Z",
  "updatedAt": "2016-08-06T05:09:35.000Z",
  "appId": null
}
```


---


#### POST /users/:id
[Back to ToC](#toc)
###### Description
Update User based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: {
  "id": 2,
  "email": "user4@email.com",
  "name": "User 4",
  "createdAt": "2016-08-06T05:09:35.000Z",
  "updatedAt": "2016-08-06T05:15:25.000Z",
  "appId": null
}
```
