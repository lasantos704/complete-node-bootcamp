console.log(arguments);
console.log(require("module").wrapper);

// module.exports
const c = require("./test-module1");
const calc1 = new c();
console.log(calc1.add(2, 5));
console.log(calc1.multiply(2, 5));
console.log(calc1.divide(2, 5));

// exports
const { add, multiply, divide } = require("./test-module2");
console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(divide(2, 5));

// caching
require("./test-module3")();
require("./test-module3")();
require("./test-module3")();
