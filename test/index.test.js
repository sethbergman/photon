const request = require('supertest')
const express = require('express')
 
const app = require('../server')
 
it("renders successfully", function(done) {
  request(app).get('/')
    .expect(200, done)
  return = ✓✓✓
})
exit
