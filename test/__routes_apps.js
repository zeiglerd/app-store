const expect = require('chai').expect;
const request = require('supertest');
const utilTool = require('utility-tool');

describe('App Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Apps
  it('GET /api/v1/apps returns multiple apps', (done) => {
    request(server)
    .get('/api/v1/apps')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        utilTool.debug(null, err);
      } else {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.tstApp = apps[0];

        expect(apps.length).to.be.above(0);

        done();
      }
    });
  });

  // Test for a single app
  it('GET /api/v1/apps/:id returns an obj with id, title, description, and releaseDate', (done) => {
    request(server)
    .get(`/api/v1/apps/${this.tstApp.id}`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        utilTool.debug(null, err);
      } else {
        const app = res.body;

        expect(app).to.have.property('id');
        expect(app).to.have.property('title');
        expect(app).to.have.property('description');

        done();
      }
    });
  });
});
