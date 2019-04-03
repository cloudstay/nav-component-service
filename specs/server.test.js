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

describe('seed test', function() {
  test('if listing id is a string', (done) => {
    expect(typeof seed.listing_id).toBe('string');
    done();
  });

  test('if type of listings is a string', (done) => {
    expect(typeof seed.type_of_listings).toBe('string');
    done();
  });

  test('if essentials is a boolean', (done) => {
    expect(typeof seed.amenities.essentials).toBe('string');
    done();
  });

  test('if type of bed is a string', (done) => {
    expect(typeof seed.sleeping_arrangements.type_of_bed).toBe('string');
    done();
  });
});
