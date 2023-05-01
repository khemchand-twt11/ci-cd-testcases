// index.js

//  import the crypto module
const operation = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];
const crypto = require("crypto");
//  get a commands using process.argv

// complete the  function
if (operation == "random" && !num1) {
  return console.log("Provide length for random number generation.");
} else if (operation == "random") {
  const num = crypto.randomBytes(num1).toString("binary");
  return console.log(num);
}
switch (operation) {
  case "add":
    console.log(num1 + num2);
    break;
  case "sub":
    console.log(num1 - num2);
    break;
  case "mult":
    console.log(num1 * num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "sin":
    console.log(Math.sin(num1));
    break;
  case "cos":
    console.log(Math.cos(num1));
    break;
  case "tan":
    console.log(Math.tan(num1));
    break;
  case "tan":
    console.log(Math.tan(num1));
    break;
  default:
    console.log("Invalid operation");
}
