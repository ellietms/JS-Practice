function flatten(array) {
  let results = [];
  let currentArray;
  function helper(array) {
    if (array.length !== 0) {  
      if (Array.isArray(array[0])) {
        console.log(currentArray);
        let currentArray = [...array[0]]  
        console.log(currentArray);  
        helper(currentArray);
      } 
      else {
         
        // results.push([...currentArray]);
        helper(array.slice(1));
      }
    }
  }
  helper(array);
  return results;
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
