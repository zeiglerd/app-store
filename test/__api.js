const request = require('supertest');

describe('API', () => {

  var server;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  it('/ should return specified object', (done) => {
    request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { hello: "world" }, done);
  });

  it('/status should return specified healthy:true', (done) => {
    request(server)
      .get('/api/status')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { healthy: true }, done);
  });

});
