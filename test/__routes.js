const expect = require('chai').expect;
const request = require('supertest');
const app = require('../src/models/app');
const utils = require('../src/lib/utilities');

// Test for Multiple Users

// Test for a single user

let tstUser;

const routes = [
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

describe('User Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  const doit = (i) => {
    it(`${routes[i].type} ${routes[i].route} ${routes[i].desc}`, (done) => {
      request(server)
      .get(routes[i].route)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => routes[i].cb(res, done));
    });
  };

  for (let i = 0; i < routes.length; i++) {
    console.log('asdf');
    //doit(i);
  }


  // Add, find app(s) by user id and remove app
  it('GET /api/v1/users/:id/apps Should add, find app(s) by user id and remove app.', (done) => {
    const newApp = {
      id: 'tstId',
      title: 'tstApp',
      description: 'tstDesc',
      userId: this.tstUser.id,
    };

    app.add(newApp, () => {
      request(server)
      .get(`/api/v1/users/${this.tstUser.id}/apps`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const tmpApps = res.body;

        // Expect tmpApps.length to be above 0, app(s) found for user id
        expect(tmpApps.length).to.be.above(0);
      })
      .end(() => {
        app.remove(newApp, (data) => {
          request(server)
          .get(`/api/v1/apps/${newApp.id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect((res) => {
            const tmpApp = res.body;

            // Expect tmpApp to return 1, app removed
            expect(tmpApp).to.equal(1);
          })
          .end(done);
        }, err => utils.debug(err));
      });
    });
  }, err => utils.debug(err));
});
