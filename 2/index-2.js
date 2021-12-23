const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const entries = data.toString().split("\n");

let horizontal = 0;
let depth = 0;
let aim = 0;

entries.forEach((val) => {
  const [cmd, distance] = val.split(" ");
  if (cmd === "forward") {
    horizontal += +distance;
    depth += aim * +distance;
  } else {
    aim += cmd === "down" ? +distance : -distance;
  }
});

console.log(horizontal * depth);
