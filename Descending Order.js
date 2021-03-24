function descendingOrder(n){
  let strNum = String(n),
      numbArr = strNum.split(''),
      numbSort = numbArr.sort(function(a,b){
        return a - b;
      });

  numbSort = numbSort.reverse();
  strNum = numbSort.join('');
  
  return parseInt(strNum);

}
