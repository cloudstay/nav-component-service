// const supertest = require('supertest');
// const express = require('express');

// describe('service test', function() {
//   var app = express();
//   var server;

//   beforeEach(function() {
//     server = app.listen(3003);
//   });

//   afterEach(function() {
//     server.close();
//   });

//   test('if GET request with params in range of 001-100 outputs status code of 200', function() {
//     var params = 11;
//     supertest(app).get(`/api/rooms?id=${params}`).expect(200);
//   });

//   test('if GET request with params in different range outputs status code of 404', function() {
//     var params = 111;
//     supertest(app).get(`/api/rooms?id=${params}`).expect(404);
//   });
// })

const seed = require('../database/seed.js');

test('if listing id is a string', (done) => {
  expect(typeof 'seed.listing_id').toBe('string');
  done();
});

