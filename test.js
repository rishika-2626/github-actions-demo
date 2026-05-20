const add = require("./index");

function testAdd() {
  if (add(2, 3) !== 5) {
    throw new Error("Test failed!");
  }

  console.log("Test passed!");
}

testAdd();