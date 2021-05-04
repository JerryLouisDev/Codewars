// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
  // step 1 turn number into a string
  const stringNum = n.toString();
  // step 2 split the string into an array
  const arr = stringNum.split('');
  // step 3 sort the array to largest to smallest
  arr.sort((a,b) => b - a);
  // step 4 join the array back into a string
  const newNum = arr.join('');
  // step 5 turn back into a number
  return +newNum
}
