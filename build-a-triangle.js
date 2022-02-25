function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
let buildTriangle = (height) => {
  let triangle = "";
  for (let i = 1; i <= height; i++) {
    triangle += makeLine(i);
  }
  return triangle;
};

console.log(buildTriangle(5));
