function highAndLow(numbers){
  var num = numbers.split(' ');
  var max = Math.max.apply(null, num);
  var min = Math.min.apply(null, num);
  var mm = String(max) + " " + String(min);
  return mm;
}
