const expect = require('chai').expect;
const faker = require('faker');
const App = require('../src/models/app');
const utilTool = require('utility-tool');

describe('App Model', () => {
  // Find all apps
  it('GET /api/v1/apps - Find all apps', (done) => {
    App.all((err) => {
      utilTool.debug(err);
    }, (apps) => {
      // Apps (Array) should be a length greater than 0
      expect(apps.length).to.be.above(0);

      // Save the returned data for later use in tests
      this.tstApp = apps[0].dataValues;

      done();
    });
  });

  // Find app by id
  it('GET /api/v1/apps/:id - Find app by id', (done) => {
    // Call app model for finding
    App.one(this.tstApp, (err) => {
      utilTool.debug(err);
    }, (app) => {
      // App.title should match fakeApp.title
      expect(app.dataValues.title).to.be.equal(this.tstApp.title);

      done();
    });
  });

  // Create app
  it('POST /api/v1/apps - Create app', (done) => {
    // Generate a fake app with a random title
    const fakeApp = { title: faker.name.firstName() };

    // Call app model for adding
    App.add(fakeApp, (err) => {
      utilTool.debug(err);
    }, (app) => {
      // App.title should match fakeApp.title
      expect(app.dataValues.title).to.be.equal(fakeApp.title);

      // Save the returned data for later use in tests
      this.tstApp = app.dataValues;

      done();
    });
  });

  // Update a App
  it('POST /api/v1/apps/:id - Update a App', (done) => {
    // Update the title of the app
    this.tstApp.title = 'Not A Real Name';

    // Call app model for updating
    App.update(this.tstApp, (err) => {
      utilTool.debug(err);
    }, (app) => {
      // App.title should match this.tstApp.title
      expect(app.dataValues.title).to.be.equal(this.tstApp.title);

      // Save the returned data for later use in tests
      this.tstApp = app.dataValues;

      done();
    });
  });

  // Delete app by id
  it('DELETE /api/v1/apps/:id - Delete app by id', (done) => {
    // Let Sequelize know to forcefully remove the value, if paranoid.
    this.tstApp.force = true;

    // Call app model for updating
    App.remove(this.tstApp, (err) => {
      utilTool.debug(err);
    }, (data) => {
      // if successfully removed a 1 should be returned
      expect(data).to.be.equal(1);

      done();
    });
  });
});
