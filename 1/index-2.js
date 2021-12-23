const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const entries = data.toString().split("\n").map(Number);

let currentSum = entries.slice(0, 3).reduce((acc, val) => acc + val);

console.log(
  entries
    .slice(3)
    .map((val, i) => {
      const previousSum = currentSum;
      currentSum = previousSum - entries[i] + val;
      return previousSum < currentSum;
    })
    .reduce((acc, e) => acc + Number(e))
);
