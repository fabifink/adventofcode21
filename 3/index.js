const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const entries = data.toString().split("\n");

const rates = [[], []];
const bitCount = entries[0].length;

for (let i = 0; i < bitCount; i++) {
  const [zeroCount, oneCount] = entries.reduce(
    (acc, num) => {
      acc[Number(num.charAt(i))] += 1;
      return acc;
    },
    [0, 0]
  );

  rates[0].push(zeroCount > oneCount ? 0 : 1);
  rates[1].push(zeroCount > oneCount ? 1 : 0);
}

const gamma = parseInt(rates[0].join(""), 2);
const epsilon = parseInt(rates[1].join(""), 2);

console.log(gamma * epsilon);
