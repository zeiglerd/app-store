// Test for the Apps of a Specific user
it('GET /api/v1/users/:id/apps should find all apps for a user', (done) => {
  // Create a dummy app
  const newApp = {
    id: 'testId',
    title: 'Best New Test App',
    description: 'none',
    userId: this.tstUser.id,
  };

  // Add the dummy app
  App.add(newApp, () => {
    // Use the API to get all apps by user id
    request(server)
    .get(`/api/v1/users/${this.tstUser.id}/apps`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const tmpApps = res.body;

      expect(tmpApps.length).to.be.above(0);

      // Remove the dummy app
      App.remove(newApp, (data) => {
        // If data exists
        if (data) {
          done();
        }
      }, null);
    });
  });
}, null);
});
