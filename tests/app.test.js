const request = require('supertest');
const app = require('../app.js');

describe('Testing App Routes', () => {
  it('should response GET method for /', () => {
    return request(app)
      .get('/')
      .then(res => expect(res.text).toBe('Welcome!'));
  });

  it('should response GET method for /terminator', () => {
    return request(app)
      .get('/terminator')
      .then(res => expect(res.text).toBe("I'll be back!"));
  });

  it('should response GET method for /tonystark', () => {
    return request(app)
      .get('/tonystark')
      .then(res => expect(res.text).toBe('Love you 3000!'));
  });

  it('should response GET method for /tonystark/ironman', () => {
    return request(app)
      .get('/tonystark/ironman')
      .then(res => expect(res.text).toBe('Language!!'));
  });

  it('should response GET method for /brucebanner', () => {
    return request(app)
      .get('/brucebanner')
      .then(res => expect(res.text).toBe("Don't make me angry!!"));
  });

  it('should response GET method for /brucebanner/hulk', () => {
    return request(app)
      .get('/brucebanner/hulk')
      .then(res => expect(res.text).toBe('Hulk smash!'));
  });

  it('should response GET method for /steverogers', () => {
    return request(app)
      .get('/steverogers')
      .then(res => expect(res.text).toBe('On your left!'));
  });

  it('should response GET method for /steverogers/captainamerica', () => {
    return request(app)
      .get('/steverogers/captainamerica')
      .then(res => expect(res.text).toBe('Avengers, assemble!'));
  });

  it('should response GET method for /thanos', () => {
    return request(app)
      .get('/thanos')
      .then(res => expect(res.text).toBe('I am inevitable!'));
  });

  it('should response GET method for /groot', () => {
    return request(app)
      .get('/groot')
      .then(res => expect(res.text).toBe("I'm Groot!"));
  });

  it('should response GET method for /magic8', () => {
    return request(app)
      .get('/magic8')
      .then(res => expect(res.statusCode).toBe(200));
  });
});
