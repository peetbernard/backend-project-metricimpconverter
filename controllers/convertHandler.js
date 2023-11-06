function ConvertHandler() {
  this.getNum = (input) => {
    const regex = /[/].*[/]/g
    if (regex.test(input)) {
      return undefined
    }

    let result = eval(input.split(/[a-z]+/i)[0])
    return result ? result : 1
  }

  this.getUnit = (input) => {
    const validUnit = ["gal", "L", "mi", "km", "lbs", "kg"]
    let result = input
    if (input.match(/^[0-9]/)) {

      result = input
        .split(/([a-z])/i)
        .slice(1)
        .join("")
    }

    result = result.toLowerCase()

    if (result === "l") {
      result = "L"
    }

    for (let i in validUnit) {
      if (result === validUnit[i]) {
        return result
      }
    }
    return undefined
  }

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "lbs":
        return "kg"
      case "gal":
        return "L"
      case "km":
        return "mi"
      case "kg":
        return "lbs"
      case "L":
        return "gal"
      case "mi":
        return "km"
    }
  }

  this.spellOutUnit = function (unit) {
    switch (unit) {
      case "lbs":
        return "pounds"
      case "gal":
        return "gallons"
      case "km":
        return "kilometers"
      case "kg":
        return "kilograms"
      case "L":
        return "liters"
      case "mi":
        return "miles"
    }
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    switch (initUnit) {
      case "lbs":
        return Number(parseFloat(initNum * lbsToKg).toFixed(5))
      case "gal":
        return Number(parseFloat(initNum * galToL).toFixed(5))
      case "km":
        return Number(parseFloat(initNum / miToKm).toFixed(5))
      case "kg":
        return Number(parseFloat(initNum / lbsToKg).toFixed(5))
      case "L":
        return Number(parseFloat(initNum / galToL).toFixed(5))
      case "mi":
        return Number(parseFloat(initNum * miToKm).toFixed(5))
    }
  }

  // this.getString = function (initNum, initUnit, returnNum, returnUnit) {
  //   let result

  //   return result
  // }
}

module.exports = ConvertHandler
