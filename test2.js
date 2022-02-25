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
  let arr = [];
  let submitter = "";
  for (let veggie of vegetables) {
    arr.push(veggie[metric]);
    if (veggie[metric] === Math.max(...arr)) {
      submitter = veggie["submitter"];
    }
  }
  return submitter;
};

console.log(judgeVegetable(vegetables, metric));
