// This is the first step to understanding FizzBuzz.
//
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
//
// Your expected output is an array of positive integers from 1 to n (inclusive).
//
// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
// parameter- a number that is ONLY positive
// return an array of numbers from one to n
  

// need an empyt array to put numbers 1-n inside of
  const arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
//return the array

  return arr
}
