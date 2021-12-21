const walk = ({ name, score, field }, walkFields) => {
  field = (field + walkFields) % 10;
  score += field ? field : 10;

  return { name, score, field };
};

const calcDices = (rolls = 0, eyesSum = 0) => {
  if (rolls === 3) {
    return eyesSum;
  }
  return [1, 2, 3].flatMap((eyes) => calcDices(rolls + 1, eyesSum + eyes));
};

const factoredDices = calcDices().reduce((acc, val) => {
  if (!acc[val]) {
    acc[val] = 0;
  }
  acc[val] += 1;
  return acc;
}, {});

const countedResults = { A: 0, B: 0 };

const play = (a, b, factor = 1) => {
  if (a.score >= 21 || b.score >= 21) {
    const winner = a.score > b.score ? a.name : b.name;
    countedResults[winner] += 1 * factor;
    return;
  }

  Object.keys(factoredDices).forEach((dice) => {
    play(b, walk(a, Number(dice)), factoredDices[dice] * factor);
  });
};

console.time("calc");
play({ name: "A", score: 0, field: 5 }, { name: "B", score: 0, field: 10 });
console.log(Math.max(...Object.values(countedResults)));
console.timeEnd("calc");
