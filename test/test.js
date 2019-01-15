var request = require("supertest");
var app = require("../server.js");
describe("GET /Users", function() {
 it("respond with resource", function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get("/users").expect("respond with a resource", done);
 });
});
