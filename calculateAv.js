// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  let sum = array.reduce((a,b) => {
    return a + b
  })
  const average = sum / array.length
  console.log(average)
  return average
}
