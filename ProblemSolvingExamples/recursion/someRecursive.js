function someRecursive(array, ourFunction) {
  let result;
  function helper(array) {
    if (array.length !== 0) {
      if (ourFunction(array[0]) === true) {
        result = true;
        return result;
      } 
      else {
        array = array.slice(1);
        result = false;
        helper(array);
      }
    }
    return result;
  }
  helper(array);
  return result;
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
