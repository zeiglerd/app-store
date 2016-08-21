const expect = require('chai').expect;
const request = require('supertest');
const App = require('../src/models/app');
const utilTool = require('utility-tool');

describe('User Routes', () => {
  let server;

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
    .end((err, res) => {
      if (err) {
        utilTool.debug(null, err);
      } else {
        const users = res.body;

        // Save one single user from the list to test on in later tests
        this.tstUser = users[0];

        expect(users.length).to.be.above(0);

        done();
      }
    });
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
    request(server)
    .get(`/api/v1/users/${this.tstUser.id}`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        utilTool.debug(null, err);
      } else {
        const user = res.body;

        expect(user).to.have.property('id');
        expect(user).to.have.property('name');

        done();
      }
    });
  });

  // Test for the Apps of a Specific user
  it('GET /api/v1/users/:id/apps should find all apps for a user', (done) => {
    const newApp = {
      id: 'tstId',
      title: 'tstApp',
      description: 'tstDesc',
      userId: this.tstUser.id,
    };

    App.add(newApp, (err) => {
      utilTool.debug(null, err);
    }, () => {
      request(server)
      .get(`/api/v1/users/${this.tstUser.id}/apps`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          utilTool.debug(null, err);
        } else {
          const apps = res.body;

          expect(apps.length).to.be.above(0);

          App.remove(newApp, (err) => {
            utilTool.debug(null, err);
          }, (data) => {
            if (data) {
              done();
            }
          });
        }
      });
    });
  });
});
