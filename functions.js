//* Pure Function => Mutations are not allowed in pure functions

const employee1 = {
  name: "John Doe",
  age: 25,
  address: {
    city: "San Francisco",
    state: "CA",
  },
};

// Shallow copy of employee1 object using spread operator (...) and updating the name and age properties
const employee2 = {
  ...employee1,
  name: "Rayan",
  age: 30,
};

// console.log(employee1);
// console.log(employee2);

// Currying

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// (a) => (b) => a + b; it is equivalent to the above function add function declaration and definition in ES6 syntax
// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument each and it is a way of constructing functions that allows partial application of a function’s arguments.
const add = (a) => (b) => a + b;

const sum = add(5);

console.log(sum(10));
