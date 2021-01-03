// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.

let example = [
  [1, 2, 3],
  ["a", "b", "c"],
  [6,7,8,9]
];

//  8 => j = 2 (maxlength - 2) => element = 8 // i =0 , j = 3 


// j + 1 = maxLength ; if (array[i].length !== maxlength) if(array[i].length === maxlength)
//  j = 3 

function lazyMerger(array) {
  let i = 0;
  let j = 0;

  const result = {
    next: () => {
      if (i === 0 && j === 0) {
         i = i + 1;
      } 
      else if (i !== array.length - 1) {
        if (j <= array[i].length - 1) {
            i =  i + 1;
        }
        else if(j > array[i].length - 1){
          i = i + 1;
        }
        if(array[i][j] === undefined){
            i = i + 1;
        }
    }
      else if (i === array.length - 1) {
            if(j <= array[i].length - 1 && array[i][j] !== undefined){
                i = 0;
                j = j + 1;
            }
           }   
     return array[i][j];
    },
  };
  return result;
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
console.log(obj.next());
console.log(obj.next());
