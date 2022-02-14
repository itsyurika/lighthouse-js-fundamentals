const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
console.log(
  "These are ingredients for banana bread listed using a while loop: "
);
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("These are ingredients for banana bread listed using a for loop: ");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("These are ingredients for banana bread listed in reverse order: ");
for (let r = ingredients.length - 1; r >= 0; r--) {
  console.log(ingredients[r]);
}

// trying reverse method

// let reversed = ingredients.reverse();
// console.log(reversed);
//
