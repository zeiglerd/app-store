const expect = require('chai').expect;
const request = require('supertest');
const app = require('../src/models/app');
const utils = require('../src/lib/utilities');

// Test for Multiple Users

// Test for a single user

const tests = [
  {
    cb: (res, done) => {
      const tmpUsers = res.body;

      // Save one single user from the list to test on in later tests
      this.tstUser = tmpUsers[0];

      expect(tmpUsers.length).to.be.above(0);

      done();
    },
    desc: 'returns multiple users',
    route: '/api/v1/users',
    type: 'GET',
  },
  {
    cb: (res, done) => {
      const tmpUser = res.body;

      expect(tmpUser).to.have.property('id');
      expect(tmpUser).to.have.property('name');

      done();
    },
    desc: 'returns an user obj with a id and name property',
    route: `/api/v1/users/${this.tstUser.id}`,
    type: 'GET',
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
    it(`${test.type} ${test.route} ${test.desc}`, (done) => {
      request(server)
      .get(test.route)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => test.cb(res, done));
    });
  });
});
