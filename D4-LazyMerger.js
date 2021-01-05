// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.

let example = [ 
  [],
  [1, 2, 3],
  [],
  ["a", "b", "c"],
  [6,7,8,9],
  [],
  []
];

function lazyMerger(array) {
  let i =0 ;
  let j = 0;
  let element;
  const result = {
    next: () => {
      if(array[i][j] !== undefined){
        if(i < array.length - 1){
        element = array[i][j];
        i = i + 1;
        }
        else if(i === array.length - 1){
          element = array[i][j];
          i = 0 ;
          j = j + 1;
        }

      }
      else if(array[i][j] === undefined){
        i = i + 1;
        element = array[i][j];
        if(array[i][j] !== undefined && i < array.length - 1){
        i = i + 1;
        }
        else if(array[i][j] === undefined && i < array.length - 1){
          i = i + 1 ;
          element = array[i][j];

        }
        else if(array[i][j] === undefined  && i === array.length - 1){
          i = 0;
          j = j + 1;
        }
      }
      return element;
    }
}
return result
}
const obj = lazyMerger(example);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
