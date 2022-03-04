let loopyLighthouse = (range, multiples, words) => {
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    } else if (i % 3 === 0) {
      console.log("Loopy");
    } else if (i % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// access range [a , b] as range[0] = start number range[1] = end number. multiples[0] = multiples1, multiples[1] = multiples2. words[0] be for condition i % multiples1 ===0 , words[1] be for condition i % multiples2 === 0, for condition that satisfy both (&&) will be concatenate words[0] words[1]
