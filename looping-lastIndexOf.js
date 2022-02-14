let lastIndexOf = (array, num) => {
  let output;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === num) {
      output = i;
      return output;
    }
  }
  return -1;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
//

//* finding all the occurrences of an element
// var indices = [];
// var array = ["a", "b", "a", "c", "a", "d"];
// var element = "a";
// var idx = array.lastIndexOf(element);
// while (idx != -1) {
// indices.push(idx);
// idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
// }
//
// console.log(indices);
