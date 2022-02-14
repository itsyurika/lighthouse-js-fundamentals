let range = (start, end, step) => {
  let output = [];
  if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  }
  return output;
};

console.log(range(0, 10, 2));
