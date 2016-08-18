const expect = require('chai').expect;
const request = require('supertest');
const utilTool = require('utility-tool');

let tstData = {};
function getTstData() {
  return tstData;
}
function setTstData(data) {
  tstData = data;
}

describe('Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  it('POST /api/v1/users Adds a user, should return obj with id and name.', (done) => {
    request(server)
    .post('/api/v1/users')
    .send({ name: 'tstName' })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        utilTool.debug(err);
      } else {
        setTstData(res.body);

        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');

        done();
      }
    });
  });

  const tests = [{
    desc: 'Returns multiple users, should be above 0.',
    method: 'GET',
    route: '/api/v1/users',
    statusCode: 200,
    success: (res, done) => {
      expect(res.body.length).to.be.above(0);

      // console.log(getTstData());
      // Result:
      // {
      //   id: '4ab54efa-1f6b-41d5-a48e-e0470de20338',
      //   name: 'tstName',
      //   updatedAt: '2016-08-15T04:39:15.000Z',
      //   createdAt: '2016-08-15T04:39:15.000Z'
      // }

      done();
    },
  }, {
    desc: 'Returns single user, should return obj with id and name.',
    method: 'GET',
    route: `/api/v1/users/${getTstData().id}`, // getTstData() returns {}, see lines 23-32.
    statusCode: 200,
    success: (res, done) => {
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name');

      done();
    },
  }];

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
            utilTool.debug(err);
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
            utilTool.debug(err);
          } else {
            test.success(res, done);
          }
        });
      }
    });
  });
});
