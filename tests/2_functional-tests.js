const chaiHttp = require("chai-http")
const chai = require("chai")
let assert = chai.assert
const server = require("../server")

chai.use(chaiHttp)

suite("Functional Tests", function () {
  test("/api/convert 10L", function () {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "10L" })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, 10)
        assert.equal(res.body.initUnit, "L")
        assert.approximately(res.body.returnNum, 2.64172, 0.1)
        assert.equal(res.body.returnUnit, "gal")
      })
  })
  test("/api/convert 32g", function () {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "32g" })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.initUnit, undefined)
      })
  })
  test("/api/convert 3/7.2/4kg", function () {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "3/7.2/4kg" })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, undefined)
      })
  })
  test("/api/convert 3/7.2/4kilomegagram", function () {
    chai
      .request(server)
      .get("/api/convert")
      .query({ input: "3/7.2/4kilomegagram" })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, undefined)
        assert.equal(res.body.initUnit, undefined)
      })
  })
})
