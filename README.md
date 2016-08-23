[![app-store on CodeShip](https://codeship.com/projects/9e5b0d80-48ec-0134-1120-52b63a9a4ec4/status?branch=master)](https://codeship.com/projects/169471) [![Semantic Versioning 2.0.0](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/certified-snoop-lion.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/no-ragrets.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-git.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-html.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

#### ToC
| Sections |
|---|
| [Semantic Versioning](#semantic-versioning) |
| [Production Installation](#production-installation) |
| [Development Installation](#development-installation) |
| [Running the Server for Production](#running-the-server-for-production) |
| [Running the Server for Development](#running-the-server-for-development) |
| [Unit Testing](#unit-testing) |
| [Workflow](#workflow) |
| [Deployment](#deployment) |
| [Routes](#routes) |



---



## Semantic Versioning
[Back to ToC](#toc)

- If you're not familiar with semantic versioning; or, just need some brushing up, head on over to [http://semver.org/](http://semver.org/).



---



## Installation



#### Production Installation
[Back to ToC](#toc)

- Any of the following commands, that begin with a *$*, indicate the use of command line.

1. Using your command line, navigate to the root of this project.

2. Install all required dependencies, for this project:

```
$ npm i
```

3. Create a directory -- in the root of this project -- in which log files will be stored.

```
$ mkdir logs
```

4. Install all production command line tools:

```
$ npm i -g pm2@latest
```

5. Create a MySQL database named *appStore*, you won't need to make any tables.

6. Create a file -- in the root of the project -- named, *env.json* and populate it, using this template as an example:

```
{
  "DB_HOST": "localhost",
  "DB_NAME": "appStore",
  "DB_PASS": "your_password_here",
  "DB_PORT": 3306,
  "DB_SCHEMA": "mysql",
  "DB_USER": "_our_username_here"
}
```



#### Development Installation
[Back to ToC](#toc)

1. You must follow the [Production Installation](#production-installation) in order to continue.

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



#### Running the Server for Production
[Back to ToC](#toc)

```
$ npm start
```



#### Running the Server for Development
[Back to ToC](#toc)

- Using pm2, the server will be able to automatically restart it's self when crashing and will also actively watch for file changes, similar to nodemon.

- We also set the environment variable *DEBUG* to *true*. This enables debugging messages to the command line, using our custom debug functionality.

```
$ DEBUG=true pm2 start src/server.js --watch ./
```



#### Unit Testing
[Back to ToC](#toc)

- Unit tests are located in the *test* folder, which is located in the root of this project.

1. You must follow the [Development Installation](#development-installation) in order to unit test.

2. Use the following command to run the unit test(s):

```
$ npm test
```



---



## Workflow
[Back to ToC](#toc)

1. You must follow the [Production Installation](#production-installation) to use this workflow; however, you should also follow the [Development Installation](#development-installation)!

2. Using a feature branch workflow, make the changes -- to the code base -- that you require.

  - Create a new branch for each feature you contribute to the code base.

```
$ git checkout -b *your_feature_branch*
```

3. Once you have finished making your changes, confirm that the unit test(s) pass successfully.

  - See [Unit Testing](#unit-testing).

4. After the unit test(s) have passed successfully, use Git to add your changes to the index.

```
$ git add -A
```

5. Now that your changes have been added to the index, we can commit to the local Git repo.

  - It is VERY important to leave a meaningful commit message. Doing so may help you or another developer solve an error faster, understand your train of thought or even give someone a laugh!

```
$ git commit -m '*a_meaningful_message_about_the_changes_you_have_made*'
```

6. Next, using Git, we will push our changes to GitHub.

```
$ git push origin *your_feature_branch*
```

7. Using GitHub, make a pull request to merge your feature branch with the master branch.

8. Once your pull request has been completed, make a tag, for your feature!

  - You can check the current tags for this project using Git's tag command.

  ```
  $ git tag
  ```

  - After deciding what your tag will be named (e.x. v1.8.0), you can create it with Git.

  ```
  $ git tag *tag_name*
  ```

9. With your newly created tag, we can finally make a release for staging!

```
$ git push origin -u *your_feature_branch*:release
```



---



## Deployment
[Back to ToC](#toc)

1. You must follow the [Workflow](#workflow) in order to deploy your feature branch(es).

2. Using Git, we will push our feature branch(es), to the master branch, of the development server.

```
$ git push dev-server *your_feature_branch*:master
```

3. That is it, your changes should now be live at [http://45.55.234.186/](#http://45.55.234.186/)!



---



## Routes
[Back to ToC](#toc)


#### Routes ToC
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
###### Description
Delete App based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: 1
```


---


#### GET /apps/:id
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
###### Description
Delete User based upon id
###### Example Response
```json
HTTP Response Status Code: 200 OK
JSON Response: 1
```


---


#### GET /users/:id
[Back to Routes ToC](#routes-toc)
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
[Back to Routes ToC](#routes-toc)
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
