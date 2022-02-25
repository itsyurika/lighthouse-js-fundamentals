//* February 10, 2022 for udacity loop lesson
// var prize = "";
// let winner = 1;
//
// switch (winner) {
// case 1:
// prize += "a trip for two to the Bahamas and ";
// case 2:
// prize += "a four piece furniture set.";
// break;
// case 3:
// prize += "a smartwatch and ";
// default:
// prize += "tickets to the circus.";
// }
//
// 've won " + prize);
//

// * February 11, 2022 for udacity function lesson - declaring functions
// function sayHello() {
// var message = "Hello!";
//
// return message;
// }
// sayHello();
//
//* Return vs prints
// function isThisWorking(input) {
//  "Printing: isThisWorking was called and " +
// input +
// " was passed in as an argument."
// );
// return "Returning: I am returning this string!";
// }
//
// isThisWorking(3);
//*Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
//*Returns: "Returning: I am returning this string!"
//

//* February 13th 2022, function exercises from Compass
// let ageCalculator = (name, yearOfBrith, currentYear) => {
// let output = "";
// let age = currentYear - yearOfBrith;
// output = `${name} is ${age} years old.`;
// return output;
// };
//
// console.log(ageCalculator("Miranda", 1983, 2015));
//

// let howManyHundreds = (num) => {
// let output = Math.floor(num / 100);
// return output;
// };
// console.log(howManyHundreds(1000), "=?", 10);
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

//*If any of the parameters are negative, the function should return undefined.
let calculateRectangleArea = (length, width) => {
  let output;
  if (length >= 0 && width >= 0) {
    output = length * width;
    return output;
  }
};
//*! I've shortened the code below to look like the one above by just not returning a value for negative parameters, instead of returning an undefined variable.
//
// let calculateTriangleArea = (base, height) => {
// let output;
// if (base < 0 || height < 0) {
// return output;
// } else {
// output = base * (height / 2);
// return output;
// }
// };
//
// let calculateCircleArea = (radius) => {
// let output;
// if (radius < 0) {
// return output;
// } else {
// output = Math.PI * radius ** 2;
// return output;
// }
// };
//
// console.log(calculateRectangleArea(10, 5));
// console.log(calculateRectangleArea(1.5, 2.5));
// console.log(calculateRectangleArea(10, -5)); // should print undefined
//
// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined
//
// console.log(calculateCircleArea(10)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined
//

// shows scope of the variable sum
// let sum = 3 + 2;
//
// const doubleSum = function (a, b) {
// let sum = a + b;
// return sum * 2;
// };
//
// console.log(doubleSum(5, 4));
//
// console.log(sum);
//
//

// * Feb 19th 2022 Object exercises -Trash to Treasure
//! Can't use variable to access object in dot notation! have to use brackets.

// let smartGarbage = (trash, bins) => {
//   bins[trash] += 1;
//   console.log(bins);
//   return bins;
// };

// smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });

//* Object exercise - Driving Mayor Daisy
// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40,
//   },
//   {
//     time: 1568329821632,
//     speed: 42,
//   },
//   {
//     time: 1568331115463,
//     speed: 35,
//   },
// ];

// const speed = 38;

// let carPassing = (cars, speed) => {
//   let newObject = {
//     time: Date.now(),
//     speed: speed,
//   };
//   // console.log(newObject);
//   // console.log(cars);
//   cars.push(newObject);
//   return console.log(cars);
// };

// carPassing(cars, speed);

//* Object exrcise - We're Rooting for You!

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

console.log(judgeVegetable(vegetables, metric));
