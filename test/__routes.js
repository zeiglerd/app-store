const expect = require('chai').expect;
const request = require('supertest');
// const app = require('../src/models/app');
const utils = require('../src/lib/utilities');

var tstData = {};

const tests = [
  {
    desc: 'Add user, should return obj with id and name.',
    method: 'POST',
    payload: {
      name: 'tstName',
    },
    route: '/api/v1/users',
    statusCode: 201,
    success: (res, done) => {
      this.tstData = res.body;

      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name');

      done();
    },
  },
  {
    desc: 'returns multiple users',
    method: 'GET',
    route: '/api/v1/users',
    statusCode: 200,
    success: (res, done) => {
      expect(res.body.length).to.be.above(0);

      done();
    },
  },
  {
    desc: 'returns multiple users',
    method: 'GET',
    // route: `/api/v1/users/${this.tstData.id}`,
    route: '/api/v1/users/' + this.tstData.id,
    statusCode: 200,
    success: (res, done) => {
      utils.debug(res.body);

      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name');

      done();
    },
  },
];

describe('Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  tests.forEach((test) => {
    it(`${test.method} ${test.route} ${test.desc}`, (done) => {
      if (test.method === 'GET') {
        request(server)
        .get(test.route)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(test.statusCode)
        .end((err, res) => {
          if (err) {
            utils.debug(err);
          } else {
            test.success(res, done);
          }
        });
      } else if (test.method === 'POST') {
        request(server)
        .post(test.route)
        .send(test.payload)
        .expect(test.statusCode)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            utils.debug(err);
          } else {
            test.success(res, done);
          }
        });
      }
    });
  });
});
