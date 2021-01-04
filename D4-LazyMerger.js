// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.

// let example = [
//   [1, 2, 3],
//   ["a", "b", "c"],
//   [6,7,8,9]
// ];
let example = [ 
  [1, 2, 3],
  [],
  ["a", "b", "c"],
  [6,7,8,9],
];

function lazyMerger(array) {
  let i = 0;
  let j = 0;
  let element;
  const result = {
    next: () => {
        if(i === 0 && j === 0){
          if(array[0][0] !== undefined){
          element = array[0][0];
          i = i + 1;
          }
        }
        else if(i !== array.length - 1){
          if(j <= array[i].length - 1 && array[i].length !== 0){
            element = array[i][j];
            i = i + 1;
          }
        }
        else if(i === array.length - 1 && j <= array[i].length - 1 && array[i].length !== 0){
          if(array[i][j] !== undefined){
            element = array[i][j];
            j = j + 1;
            i = 0;
          }
        }
        else if(i === array.length - 1 && j > array[i].length - 1){
          element = undefined;
        }
        if(array[i][j] === undefined && i !== array.length - 1){
          while(array[i][j] === undefined && i < array.length - 1){
          i = i + 1;
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
