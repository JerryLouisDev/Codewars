function squareDigits(num){
const digits = num.toString().split('')

    const squaredDigits = digits.map(n => n * n)

    const squareNumber = squaredDigits.join('')

    return +squareNumber
}
