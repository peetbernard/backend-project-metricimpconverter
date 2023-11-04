const chai = require("chai")
let assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

let convertHandler = new ConvertHandler()

suite("Unit Tests", function () {
  test("Whole number", function () {
    const input = "2kg"
    assert.equal(convertHandler.getNum(input), 2)
  })

  test("Decimal number", function () {
    const input = "2.1kg"
    assert.equal(convertHandler.getNum(input), 2.1)
  })

  test("Fractional number", function () {
    const input = "3/2kg"
    assert.equal(convertHandler.getNum(input), 3 / 2)
  })

  test("Fractional number with decimal", function () {
    const input = "3/2.1kg"
    assert.equal(convertHandler.getNum(input), 3 / 2.1)
  })

  test("Double fraction", function () {
    const input = "3/2/3kg"
    assert.equal(convertHandler.getNum(input), undefined)
  })

  test("No numerical input", function () {
    const input = "kg"
    assert.equal(convertHandler.getNum(input), 1)
  })

  test("Each valid input", function () {
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

    input.forEach(function (elem, i) {
      assert.equal(convertHandler.getUnit(elem), validUnits[i])
    })
  })

  test("Invalid input unit", function () {
    const input = "g"
    assert.equal(convertHandler.getUnit(input), undefined)
  })

  test("Init-Return unit check", function () {
    const input = ["gal", "l", "mi", "km", "lbs", "kg"]
    const retour = ["L", "gal", "km", "mi", "kg", "lbs"]
    for (let i = 0; i++; i <= 5) {
      assert.equal(convertHandler.getUnit(input[i]), retour[i])
    }
  })

  test("Correct spellout", function () {
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
    }
  })

  test("gal to L", function () {
    const input = [1, "gal"]
    const result = [3.78541]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })

  test("L to gal", function () {
    const input = [1, "L"]
    const result = [1/3.78541]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })

  test("mi to km", function () {
    const input = [1, "mi"]
    const result = [1.60934]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })

  test("km to mi", function () {
    const input = [1, "km"]
    const result = [1/1.60934]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })

  test("lbs to kg", function () {
    const input = [1, "lbs"]
    const result = [0.453592]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })

  test("kg to lbs", function () {
    const input = [1, "kg"]
    const result = [1/0.453592]
    assert.equal(convertHandler.convert(input[0],input[1]), result[0])
  })
})
