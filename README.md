## Semantic Versioning
http://semver.org/



---



## Installation


#### Production

1. Using command line, navigate to the root of the project.

2. Install all required dependencies, for this project:

```
$ npm i
```

3. Install all production command line tools:

```
$ npm i -g pm2@latest
```

4. Create a MySQL database named "*appStore*," you won't need to make any tables.

5. Create a file -- in the root of the project -- named, *env.json* and populate it, using this template as an example:

```
{
  "DB_HOST": "localhost",
  "DB_NAME": "appStore",
  "DB_PASS": "_your_username_here_",
  "DB_PORT": 3306,
  "DB_SCHEMA": "mysql",
  "DB_USER": "_your_username_here_"
}
```


#### Development

1. You must follow the [Production Installation](#production) in order to continue.

2. Create a file -- in the root of this project -- named, *.eslintrc.json* and populate it with this [eslint configuration](http://eslint.org/docs/user-guide/configuring).

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

3. Install all development command line tools:

```
$ npm i -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react mocha
```

4. Optional: Install eslint as an extension for [Atom](https://atom.io/):

```
$ apm i linter-eslint
```



---



## Usage


#### Running the Server in the Preferred Production State

```
$ npm start
```


#### Running the Server in the Preferred Development State

- Using pm2, the server will be able to automatically restart it's self when crashing and will also actively watch for file changes, similar to nodemon.

- We also set the environment variable *DEBUG* to *true*. This enables debugging messages to the command line, using our custom debug functionality.

```
$ DEBUG=true pm2 start src/server.js --watch ./
```

#### Unit Testing

- You must follow the [Development Installation](#development) in order to unit test.

- Unit tests are located in the *test* folder, which is located in the root of the project.

- Use the following command to run the unit test(s):

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
