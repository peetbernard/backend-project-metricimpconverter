const chai = require("chai")
let assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

let convertHandler = new ConvertHandler()

suite("Unit Tests", function() {
  test("Whole number", function(done) {
    const input = "2kg"
    assert.equal(convertHandler.getNum(input), 2)
    done()
  })

  test("Decimal number", function(done) {
    const input = "2.1kg"
    assert.equal(convertHandler.getNum(input), 2.1)
    done()
  })

  test("Fractional number", function(done) {
    const input = "3/2kg"
    assert.equal(convertHandler.getNum(input), 3 / 2)
    done()
  })

  test("Fractional number with decimal", function(done) {
    const input = "3/2.1kg"
    assert.equal(convertHandler.getNum(input), 3 / 2.1)
    done()
  })

  test("Double fraction", function(done) {
    const input = "3/2/3kg"
    assert.equal(convertHandler.getNum(input), undefined)
    done()
  })

  test("No numerical input", function(done) {
    const input = "kg"
    assert.equal(convertHandler.getNum(input), 1)
    done()
  })

  test("Each valid input", function(done) {
    let input = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG",
    ]
    let validUnits = [
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg",
      "gal",
      "L",
      "mi",
      "km",
      "lbs",
      "kg",
    ]

    input.forEach(function(elem, i) {
      assert.equal(convertHandler.getUnit(elem), validUnits[i])
    })
    done()
  })

  test("Invalid input unit", function(done) {
    const input = "g"
    assert.equal(convertHandler.getUnit(input), undefined)
    done()
  })

  test("Init-Return unit check", function(done) {
    const input = ["gal", "l", "mi", "km", "lbs", "kg"]
    const retour = ["L", "gal", "km", "mi", "kg", "lbs"]
    for (let i = 0; i++; i <= 5) {
      assert.equal(convertHandler.getUnit(input[i]), retour[i])
    } done()
  })

  test("Correct spellout", function(done) {
    const validOnes = ["gal", "L", "mi", "km", "lbs", "kg"]
    const spelloutUnits = [
      "liters",
      "gallons",
      "kilometers",
      "miles",
      "kilograms",
      "pounds",
    ]
    for (let i = 0; i++; i <= 5) {
      assert.equal(convertHandler.spellOutUnit(validOnes[i]), spelloutUnits[i])
    } done()
  })

  test("gal to L", function(done) {
    const input = [1, "gal"]
    const result = [3.78541]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

  test("L to gal", function(done) {
    const input = [1, "L"]
    const result = [0.26417]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

  test("mi to km", function(done) {
    const input = [1, "mi"]
    const result = [1.60934]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

  test("km to mi", function(done) {
    const input = [1, "km"]
    const result = [0.62137]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

  test("lbs to kg", function(done) {
    const input = [1, "lbs"]
    const result = [0.45359]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

  test("kg to lbs", function(done) {
    const input = [1, "kg"]
    const result = [2.20462]
    assert.equal(convertHandler.convert(input[0], input[1]), result[0])
    done()
  })

})

