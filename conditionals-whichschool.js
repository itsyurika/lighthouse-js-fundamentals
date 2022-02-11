let whichSchool = (age) => {
  //* function named "whichSchool" takes parameter "age"
  if (age < 13) {
    /* if age is below 13, return the value of "Elementary school*/
    return "Elementary School";
  } else if (13 <= age && age <= 18) {
    /* if the age is between 13 and 18 inclusive, return the value secondary school */
    return "Secondary School";
  } else {
    //For all other values, return lihthouse labs
    return "Lighthouse Labs";
  }
};
console.log(whichSchool(25));
