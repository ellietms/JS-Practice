// I want you to write a function which takes an array as a parameter.
//  That array will itself contain some number of arrays.
//  I want your function to return an object with one method, called next.
//  Each time someone calls next, it should return the next element from the next array.
// If one array is exhausted you should skip over it to the next array.

let example = [
  [1, 2, 3],
  ["a", "b", "c"],
  [6, 7, 8, 9],
  [2]
];
// i = lengthofexample  // next() is changing i with the same j //
// 1 : array1[i = 0][j = 0] (i = firstindexOfexample , for next one i will change , j will not change)
// a : array2[i=1][j=0] (i = lengthofexample , for next one it will reset i and j will add one)
// 2 : array1[i=0][j=1]  (i = firstindexOfexample , for next one i will change , j will not change)
// b : array2[i=1][j=1] (i = lengthofexample , for next one it will reset i and j will add one )
// 3 : array1[i=0][j=2] (i = firstindexOfexample , for next one i will change and j will be the same)
// c : array2[i=1][j=2] (i = lengthofexample , for next one it will reset i and j will add one )

function lazyMerger(array) {
  let i = 0;
  let j = 0;
  let element;
  let lengths = example.map(eachArray => eachArray.length);
  let maxLength = Math.max(...lengths);
  const result = {
    next: () => {
      console.log("for", "i = ", i, "j = ", j);
      if (i === 0 && j === 0) {
        element = array[0][0];
        console.log("next element is : ===> ", "{", element, "}");
        i = i + 1;
      } 
      else if (i !== array.length - 1) {
        if (array[i][j] !== undefined) {
          element = array[i][j];
          console.log("next element is : ===> ", "{", element, "}");
        } 
        //when one element is  undefined what should I do?
        else {
          console.log("sorry it is not existed");
        }
        i = i + 1;
      } 
      else if (i === array.length - 1) {
        if (array[i][j] !== undefined) {
          if (j < maxLength) {
            element = array[i][j];
            console.log("next element is : ===>", "{", element, "}");
            i = 0;
            j = j + 1;
          }
          else if (j === maxLength - 1) {
            element = array[i][j];
            console.log("next element is : ===>", "{", element, "}");
          }
        }
        //when we printed all elements with all possibilities and next one is undefined what I should do?
        else if(array[i][j] === undefined){
            if(j === maxLength - 1){
                console.log("NO MORE")
            }
            // when the last element of the last nested array is undefined what I should do?
            else{
                i = 0;
                j = j + 1;
                console.log("NOTEXISTED") 
            } 
        }
      }
      return element;
    },
  };
  return result;
}

const obj = lazyMerger(example);
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
obj.next();
