Description:
  - Display All Apps Info
Outputs:
  - [
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
Route:
  - GET /api/v1/apps
-----

Description:
  - Display Single App Info
Outputs:
  - {
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
Route:
  - GET /api/v1/apps/:id
-----

Description:
  - Display All Users Info
Outputs:
  - [
    {
      id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      name: "Chapman"
    }
  ]
Route:
  - GET /api/v1/users
-----

Description:
  - Display Single User Info
Outputs:
  - {
    id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    name: "Chapman"
  }
Route:
  - GET /api/v1/users/:id
-----
