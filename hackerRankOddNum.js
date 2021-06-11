// Given two integers, l and r, print all the odd numbers between l and r (l and r inclusive).
//
// Complete the oddNumbers function in the editor below. It has 2 parameters:
//
// 1. An Integer,l, denoting the left part of the range.
// 2. N Integer,r, denoting the right part of the range.
//
// The function must return an array of intergers denoting the odd numbers between l and r.
//
// Input Format
// Locked stub code in the editor  reads the following input from stdin and passes it to the function:
// Ther first line contains an interger, l, denoting the left part of the range.
// The second line contians an integer,r, denoting the right part of the range.
//
// Constraints
//
// * 1 <= l <= r <= 10^5
//
// Output Format
//
// The functions must return an array of intergers denoting the odd numbers between l and r. This is printed to stdout by locked stub code in the editor.

function oddNumbers(l,r){
  let arr = []
  for(let i = l + 1;  i < r; i++){
    if(i % 2 !== 0){
      arr.push(i)
    }
  }
  return arr
}
console.log(oddNumbers(1,9))
