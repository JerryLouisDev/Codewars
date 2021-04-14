// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000.

function getDivisorsCnt(n){
  const arr = [];
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
     arr.push(i)
    }

  }
  return arr.length
  // 4 => [3]
}
