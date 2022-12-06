const input = require("./input.js");

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const arr = input
  .split("\n\n")
  .map((item) =>
    item
      .split("\n")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0)
  )
  .sort((a, b) => b - a);

console.log(arr);

const [first, second, third] = arr;
console.log(first, second, third);

const ttl = first + second + third;
console.log(ttl);
