const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  // Find all users
  it('GET /api/v1/users - Find all users', (done) => {
    User.all((users) => {
      // Users (Array) should be a length greater than 0
      expect(users.length).to.be.above(0);

      // Save the returned data for later use in tests
      this.tstUserIgnored = users[0].dataValues;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Find user by id
  it('GET /api/v1/users/:id - Find user by id', (done) => {
    // Call user model for finding
    User.one(this.tstUserIgnored, (user) => {
      const tmpUser = user.dataValues;

      // User.name should match fakeUser.name
      expect(tmpUser.name).to.be.equal(this.tstUserIgnored.name);

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Create user
  it('POST /api/v1/users - Create user', (done) => {
    // Generate a fake user with a random name
    const fakeUser = { name: faker.name.firstName() };

    // Call user model for adding
    User.add(fakeUser, (user) => {
      const tmpUser = user.dataValues;

      // User.name should match fakeUser.name
      expect(tmpUser.name).to.be.equal(fakeUser.name);

      // Save the returned data for later use in tests
      this.tstUserIgnored = tmpUser;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Update a User
  it('POST /api/v1/users/:id - Update a User', (done) => {
    // Update the name of the user
    this.tstUserIgnored.name = 'Not A Real Name';

    // Call user model for updating
    User.update(this.tstUserIgnored, (user) => {
      const tmpUser = user.dataValues;

      // User.name should match tempUser.name
      expect(tmpUser.name).to.be.equal(this.tstUserIgnored.name);

      // Save the returned data for later use in tests
      this.tstUserIgnored = tmpUser;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Delete user by id
  it('DELETE /api/v1/users/:id - Delete user by id', (done) => {
    // Let Sequelize know to forcefully remove the value, if paranoid.
    this.tstUserIgnored.force = true;

    // Call user model for updating
    User.remove(this.tstUserIgnored, (response) => {
      // if successfully removed a 1 should be returned
      expect(response).to.be.equal(1);

      done();
    }, (error) => {
      throw new Error(error);
    });
  });
});
