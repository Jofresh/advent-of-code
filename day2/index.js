const input = require("./input.js");

const values = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

const WIN_SCORE = 6;
const DRAW_SCORE = 3;
const LOSS_SCORE = 0;

const testInput = `A Y
B X
C Z`;

let strategy = input.split("\n");
const MAX_ROUNDS = strategy.length;

strategy = strategy
  .map((item) => item.split(" "))
  .reduce(
    (acc, cur) => {
      const [opponent, choice] = cur;
      acc[0].push(opponent);
      acc[1].push(choice);
      return acc;
    },
    [[], []]
  );

console.log(strategy);

let score = 0;
for (let i = 0; i < MAX_ROUNDS; i++) {
  const opponent = values[strategy[0][i]];
  const choice = values[strategy[1][i]];

  const diff = choice - opponent;

  score += choice + (diff > 0 ? WIN_SCORE : diff < 0 ? LOSS_SCORE : DRAW_SCORE);
}

console.log(score);
