// expect { expect } from 'chai.expect';
// import { faker } from 'faker';
// import { App } from '../src/models/app';
const expect = require('chai').expect;
const faker = require('faker');
const User = require('../src/models/user');

describe('User Model', () => {
  // Hold test data throughout
  let tstUser;

  // Find all users
  it('GET /api/v1/users - Find all users', (done) => {
    User.all((users) => {
      // Users (Array) should be a length greater than 0
      expect(users.length).to.be.above(0);

      // Save the returned data for later use in tests
      this.tstUser = users[0].dataValues;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Find user by id
  it('GET /api/v1/users/:id - Find user by id', (done) => {
    // Call user model for finding
    User.one(this.tstUser, (user) => {
      const tmpUser = user.dataValues;

      // User.name should match fakeUser.name
      expect(tmpUser.name).to.be.equal(this.tstUser.name);

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
      this.tstUser = tmpUser;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Update a User
  it('POST /api/v1/users/:id - Update a User', (done) => {
    // Update the name of the user
    this.tstUser.name = 'Not A Real Name';

    // Call user model for updating
    User.update(this.tstUser, (user) => {
      const tmpUser = user.dataValues;

      // User.name should match tempUser.name
      expect(tmpUser.name).to.be.equal(this.tstUser.name);

      // Save the returned data for later use in tests
      this.tstUser = tmpUser;

      done();
    }, (error) => {
      throw new Error(error);
    });
  });

  // Delete user by id
  it('DELETE /api/v1/users/:id - Delete user by id', (done) => {
    // Let Sequelize know to forcefully remove the value, if paranoid.
    this.tstUser.force = true;

    // Call user model for updating
    User.remove(this.tstUser, (response) => {
      // if successfully removed a 1 should be returned
      expect(response).to.be.equal(1);

      done();
    }, (error) => {
      throw new Error(error);
    });
  });
});
