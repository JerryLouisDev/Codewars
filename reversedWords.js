// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  let splitStr = str.split(' ').reverse()
  console.log(splitStr.join(' '))
  return splitStr.join(' ')
//   return str; // reverse those words
}
