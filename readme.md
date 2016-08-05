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
| http://localhost:3000/api/v1/apps/:id | GET | /api/v1/apps/:id | [Response](#get-appsid) |
| http://localhost:3000/api/v1/apps | GET | /api/v1/apps | [Response](#get-apps) |
| http://localhost:3000/api/v1/users | GET | /api/v1/users | [Response](#get-users) |
| http://localhost:3000/api/v1/users/:id | GET | /api/v1/users/:id | [Response](#get-usersid) |


---


#### GET /apps/:id
[Back to ToC](#toc)
###### Description
Display Single App Info
###### Response
```
{
  id: "0032c47b-4a7b-4232-9cc3-6af718244ea8",
  title: "Best App Ever",
  description: "A fast paced side scrolling shooter",
  artAssets: [
    {
      title: "Splash Screen",
      srcLink: "http://i.imgur.com/5e5Ihb6.jpg"
    },
    {
      title: "Cut Scene",
      srcLink: "http://i.imgur.com/QQ3O6PO.jpg"
    }
  ],
  releaseDate: "2016-06-15T22:29:20.000Z",
  createdAt: "2016-05-15T22:29:20.000Z",
  updatedAt: "2016-05-15T22:29:20.000Z",
  user: {
    id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    name: "Chapman"
  }
}
```


---


#### GET /apps
[Back to ToC](#toc)
###### Description
Display All Apps Info
###### Response
```
[
  {
    id: "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    title: "Best App Ever",
    description: "A fast paced side scrolling shooter",
    artAssets: [
      {
        title: "Splash Screen",
        srcLink: "http://i.imgur.com/5e5Ihb6.jpg"
      },
      {
        title: "Cut Scene",
        srcLink: "http://i.imgur.com/QQ3O6PO.jpg"
      }
    ],
    releaseDate: "2016-06-15T22:29:20.000Z",
    createdAt: "2016-05-15T22:29:20.000Z",
    updatedAt: "2016-05-15T22:29:20.000Z",
    user: {
    id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    name: "Chapman"
    }
  }
]
```


---


#### GET /users
[Back to ToC](#toc)
###### Description
Display All Users Info
###### Response
```
[
  {
    id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    name: "Chapman"
  }
]
```


---


#### GET /users/:id
[Back to ToC](#toc)
###### Description
Display Single User Info
###### Response
```
{
  id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  name: "Chapman"
}
```
