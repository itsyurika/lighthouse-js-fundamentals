// ! Call back function - when you don't want to explicitly declare and define a function but rather just want to use it once on the fly -> hence inline

//* Inline function expressions
// A function expression is when a function is assigned to a variable. And, in JavaScript, this can also happen when you pass a function inline as an argument to another function. Take the favoriteMovie example for instance:

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
//! function that declares to takes another function as the first parameter and defines to take the second paramenter as the parameter of the function given in the first parameter.
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// Returns: My favorite movie is Finding Nemo

//* But you could have bypassed the first assignment of the function, by passing the function to the movies() function inline.

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
