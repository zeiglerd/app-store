// expect { expect } from 'chai.expect';
// import { request } from 'supertest';
// import { App } from '../src/models/app';
const expect = require('chai').expect;
const request = require('supertest');
const App = require('../src/models/app');

describe('User Routes', () => {
  let server;

  // Hold test data throughout
  let tstUser;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Users
  it('GET /api/v1/users returns multiple users', (done) => {
    request(server)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const tmpUsers = res.body;

        // Save one single user from the list to test on in later tests
        this.tstUser = tmpUsers[0];

        expect(tmpUsers.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
    request(server)
      .get('/api/v1/users/' + this.tstUser.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const tmpUser = res.body;

        expect(tmpUser).to.have.property('id');
        expect(tmpUser).to.have.property('name');
      })
      .end(done);
  });

  // Test for the Apps of a Specific user
  it('GET /api/v1/users/:id/apps should find all apps for a user', (done) => {
    const newApp = {
      id: 'testId',
      title: 'Best New Test App',
      description: 'none',
      userId: this.tstUser.id,
    };

    App.add(newApp, (appData) => {
      request(server)
      .get('/api/v1/users/' + this.tstUser.id + '/apps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const tmpApps = res.body;

        // Save one single app from the list to test on in later tests
        expect(tmpApps.length).to.be.above(0);
      });

      App.remove(newApp, (data) => {
        // If data exists
        if (data) {
          // Respond with JSON, status OK
          done();
        } else {
          // Respond with JSON, status Not Found
        }
      }, (err) => {
        // Respond with JSON, status Internal Server Error
      });
    });
  }, (err) => {

  });
});
