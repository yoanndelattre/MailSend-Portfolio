const request = require('supertest');
describe('--Test MailSend App-- \n', function() {
  beforeEach(function() {
    server = require('../index.js');
  });
  afterEach(function() {
    server.close();
  });
  it('POST /mail/send', function(done) {
    request(server)
        .post('/mail/send')
        .set('Accept', 'application/json')
        .send({test: 'supertest_test'})
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200, done);
  });
  it('GET /', function(done) {
    request(server)
        .get('/')
        .expect(302, done);
  });
  it('GET /robots.txt', function(done) {
    request(server)
        .get('/robots.txt')
        .expect(200, done);
  });
  it('GET /mail/send', function(done) {
    request(server)
        .get('/mail/send')
        .expect(404, done);
  });
});
