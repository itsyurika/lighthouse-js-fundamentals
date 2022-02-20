const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let winner = "";
  // we'll loop each element in the vegetables array to collect values of metric scores
  let metricScores = [];
  for (let contestant of vegetables) {
    metricScores.push(contestant[metric]);
  }
  console.log(metricScores); // logs [10, 2, 4]
  // now we need to find the highest score
  let highScore = Math.max(...metricScores);
  console.log(highScore);

  // we know the highest score of the given parameter (metric), so need to find the index of the element
  let winnerIndex = metricScores.indexOf(highScore); // the value is 0
  // using the index, we need to retrieve the vegetable submitter
  winner = vegetables[winnerIndex].submitter;
  return winner;
};

//! The code above can be simplified by writing as below - instead of declaring a new variable highScore, we can just set it as a condition to match the iterating value. If that condition is satisfied, "submitter" property of the vegetable contestant is defined as the winner.

const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let winner = "";
  // we'll loop each element in the vegetables array to collect values of metric scores
  let metricScores = [];
  for (let contestant of vegetables) {
    metricScores.push(contestant[metric]);
    if (contestant[metric] === Math.max(...metricScores)) {
      winner = contestant.submitter;
    }
  }
  return winner;
};

console.log(judgeVegetable(vegetables, metric));
