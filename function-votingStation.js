const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

const chooseStations = (array) => {
  let goodStations = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i][1] >= 20) {
      if (array[i][2] === "school" || array[i][2] === "community centre") {
        goodStations.push(array[i][0]);
      }
    }
  }
  console.log(goodStations);
  return goodStations;
};

chooseStations(stations);
