"use strict"

const expect = require("chai").expect
const ConvertHandler = require("../controllers/convertHandler.js")

module.exports = function (app) {
  let convertHandler = new ConvertHandler()

  app.route("/api/convert").get((req, res) => {
    const initNum = convertHandler.getNum(req.query.input)
    const initUnit = convertHandler.getUnit(req.query.input)
    const returnNum = convertHandler.convert(initNum, initUnit)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const initUnitString = convertHandler.spellOutUnit(initUnit)
    const returnUnitString = convertHandler.spellOutUnit(returnUnit)

    if (initNum === undefined && initUnit === undefined) {
      res.send("invalid number and unit")
    } else if (initNum === undefined) {
      res.send("invalid number")
    } else if (initUnit === undefined) {
      res.send("invalid unit")
    } else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`,
      })
    }
  })
}
