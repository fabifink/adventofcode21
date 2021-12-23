const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
const entries = data.toString().split("\n").map(Number);

console.log(entries.reduce((acc, e, i) => acc + Number(entries[i - 1] < e), 0));
