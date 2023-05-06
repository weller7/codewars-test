// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

//psedudo code
//sum all the elements of the array
//put the result in a variable
// test with % if it is odd or even

function oddOrEven(array) {
  let result = array.reduce((acc, current) => acc + current, 0)
  console.log (result)

  result % 2 === 0 ? console.log("even") : console.log("odd")
 }

// oddOrEven([5, 1, 4])

function oddOrEven(array) {
  let result = array.reduce((acc, current) => acc + current, 0)

 return result % 2 === 0 ? ("even") : ("odd")

}

console.log(oddOrEven([5, 1, 4]))
