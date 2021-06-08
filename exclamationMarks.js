Write function RemoveExclamationMarks which removes all exclamation marks from a given string.




function removeExclamationMarks(s) {

return s.replace(/!/g, "")



//   console.log(s.length - 1)
//   const makeArr = s.split('')
//   console.log(makeArr)
//   for(let i = 0; i < makeArr.length; i++){
//       if(makeArr[i] === '!'){
//         makeArr[i] = ''
//       }
//   }
//   return makeArr.join('')
//   // ! => ''
}
