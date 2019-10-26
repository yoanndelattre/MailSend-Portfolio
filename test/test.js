const request = require('supertest');
describe('--Test MailSend App--', function () {
  var server;
  beforeEach(function () {
    server = require('../index.js');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to / (302)', function testSlash(done) {
    request(server)
    .get('/')
    .expect(302, done);
  });
  it('responds to /robots.txt (200)', function testPathRobots(done) {
    request(server)
    .get('/robots.txt')
    .expect(200, done);
  });
  it('responds to /mail/send (404)', function testPathRobots(done) {
    request(server)
    .get('/mail/send')
    .expect(404, done);
  });
});