let myName = "Yuri";

let reverseFxn = (name) => {
  let reversed = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
  }
  return reversed;
};

console.log(reverseFxn(myName));
