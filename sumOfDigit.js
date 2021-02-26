function digital_root(n) {
  let digits = n.toString().split("").map(Number);
  let sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  const sumString = sum.toString();
  if (sumString.length > 1) {
    let sumDigits = sumString.split("").map(Number);
    let firstSumDigit = sumDigits.slice(0);
    let lastSumDigit = sumDigits.slice(-1);
    return firstSumDigit[0] + lastSumDigit[0];
  } else {
      return sum;
  }
}
