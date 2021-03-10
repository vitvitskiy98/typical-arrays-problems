
exports.min = function min (array) {
    if(array == undefined||array.length < 1) return 0
  let min = array[0];
  for(const value of array) {
      if(value < min) {
          min = value
      }
  }
  return min;
}

exports.max = function max (array) {
    if(array == undefined||array.length < 1) return 0
  let max = array[0];
  for(const value of array) {
      if(value > max) {
          max = value;
      }
  }
  return max;
}

exports.avg = function avg (array) {
    if(array == undefined||array.length < 1) return 0
  return array.reduce((acc,cur) => acc + cur,0)/array.length;
}
