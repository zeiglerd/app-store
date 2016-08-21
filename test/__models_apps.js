const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');
// const utilTool = require('utility-tool');

describe('App Model', () => {
  // Find all apps
  it('GET /api/v1/apps - Find all apps', (done) => {
    App.all((error) => {
      throw new Error(error);
    }, (apps) => {
      // Apps (Array) should be a length greater than 0
      expect(apps.length).to.be.above(0);

      // Save the returned data for later use in tests
      this.tstAppIgnored = apps[0].dataValues;

      done();
    });
  });

  // Find app by id
  it('GET /api/v1/apps/:id - Find app by id', (done) => {
    // Call app model for finding
    App.one(this.tstAppIgnored, (error) => {
      throw new Error(error);
    }, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match fakeApp.title
      expect(app.title).to.be.equal(this.tstAppIgnored.title);

      done();
    });
  });

  // Create app
  it('POST /api/v1/apps - Create app', (done) => {
    // Generate a fake app with a random title
    const fakeApp = { title: faker.name.firstName() };

    // Call app model for adding
    App.add(fakeApp, (error) => {
      throw new Error(error);
    }, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match fakeApp.title
      expect(app.title).to.be.equal(fakeApp.title);

      // Save the returned data for later use in tests
      this.tstAppIgnored = app;

      done();
    });
  });

  // Update a App
  it('POST /api/v1/apps/:id - Update a App', (done) => {
    // Update the title of the app
    this.tstAppIgnored.title = 'Not A Real Name';

    // Call app model for updating
    App.update(this.tstAppIgnored, (error) => {
      throw new Error(error);
    }, (pApp) => {
      const app = pApp.dataValues;

      // App.title should match this.tstAppIgnored.title
      expect(app.title).to.be.equal(this.tstAppIgnored.title);

      // Save the returned data for later use in tests
      this.tstAppIgnored = app;

      done();
    });
  });

  // Delete app by id
  it('DELETE /api/v1/apps/:id - Delete app by id', (done) => {
    // Let Sequelize know to forcefully remove the value, if paranoid.
    this.tstAppIgnored.force = true;

    // Call app model for updating
    App.remove(this.tstAppIgnored, (error) => {
      throw new Error(error);
    }, (response) => {
      // if successfully removed a 1 should be returned
      expect(response).to.be.equal(1);

      done();
    });
  });
});
