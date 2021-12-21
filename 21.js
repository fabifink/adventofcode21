// Part 1

const DICE_SIDES = 3;

const dice = {
  rolled: 0,
  roll: () => {
    dice.rolled++;
    const eyes = dice.rolled % DICE_SIDES;
    return eyes > 0 ? eyes : DICE_SIDES;
  },
};

const createPlayer = (startPosition) => {
  const player = {
    score: 0,
    eyesSum: startPosition,
    takeTurn: () => {
      if (!player.eyesSum) {
        player.eyesSum = Math.ceil(Math.random() * 10);
      }
      player.eyesSum += Array.from({ length: 3 })
        .map(dice.roll)
        .reduce((a, b) => a + b);
      const field = player.eyesSum % 10 == 0 ? 10 : player.eyesSum % 10;

      player.score += field;
    },
  };
  return player;
};

const playerA = createPlayer(5);
const playerB = createPlayer(10);
let turns = 0;

while (playerA.score < 1000 && playerB.score < 1000) {
  (turns % 2 == 0 ? playerA : playerB).takeTurn();
  turns++;
}

const loosingScore = [playerA.score, playerB.score].sort((a, b) => a - b)[0];
const answer = loosingScore * dice.rolled;

console.log(answer);
