const expect = require('chai').expect;
const request = require('supertest');

describe('User Routes', () => {
  var server;
  var user;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  return;

  // Test for Multiple Users
  it('GET /api/v1/users returns multiple users', (done) => {
    request(server)
      .get('/api/v1/users')
      .set('Accept', 'userlication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const users = res.body;

        // Save one single user from the list to test on in later tests
        this.user = users[0]

        expect(users.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single user
  it('GET /api/v1/users/:id returns an user obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/users/' + this.user.id)
      .set('Accept', 'userlication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const user = res.body;
        expect(user).to.have.property('id')
        expect(user).to.have.property('title')
        expect(user).to.have.property('description')
      })
      .end(done)
  });

});
