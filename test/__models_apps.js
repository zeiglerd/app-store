const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');

describe('App Model', () => {
  // Hold test data throughout
  let tstApp;

  // Find all apps
  it('GET /api/v1/apps - Find all apps', (done) => {
    App.all((apps) => {
      // Apps (Array) should be a length greater than 0
      expect(apps.length).to.be.above(0);

      // Save the returned data for later use in tests
      this.tstApp = apps[0].dataValues;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Find app by id
  it('GET /api/v1/apps/:id - Find app by id', (done) => {
    // Call app model for finding
    App.one(this.tstApp, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match fakeApp.title
      expect(app.title).to.be.equal(this.tstApp.title);

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Create app
  it('POST /api/v1/apps - Create app', (done) => {
    // Generate a fake app with a random title
    const fakeApp = { title: faker.name.firstName() };

    // Call app model for adding
    App.add(fakeApp, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match fakeApp.title
      expect(app.title).to.be.equal(fakeApp.title);

      // Save the returned data for later use in tests
      this.tstApp = app;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Update a App
  it('POST /api/v1/apps/:id - Update a App', (done) => {
    // Update the title of the app
    this.tstApp.title = 'Not A Real Name';

    // Call app model for updating
    App.update(this.tstApp, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match this.tstApp.title
      expect(app.title).to.be.equal(this.tstApp.title);

      // Save the returned data for later use in tests
      this.tstApp = app;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Delete app by id
  it('DELETE /api/v1/apps/:id - Delete app by id', (done) => {
    // Let Sequelize know to forcefully remove the value, if paranoid.
    this.tstApp.force = true;

    // Call app model for updating
    App.remove(this.tstApp, (response) => {
      // if successfully removed a 1 should be returned
      expect(response).to.be.equal(1);

      done();
    }, (error) => {
      throw new Error(error);
    });
  });
});
