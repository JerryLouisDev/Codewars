// Write function bmi that calculates body mass index (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let heig = height*height
  let bmiRes = weight/heig
  console.log(bmiRes)


  if(bmiRes <= 18.5){
    return "Underweight"
  }
  if(bmiRes <= 25.0){
    return "Normal"
  }
  if(bmiRes <= 30.0){
    return "Overweight"
  }
  if(bmiRes > 30){
    return "Obese"
  }
}
