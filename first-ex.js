// Given an array of strings, find the longest common prefix of any two strings. 
//  you would return "Hello "

//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 

let arr = ["Hello Ellie", "Hello Daniel",, "I like cheese"];
let example = ["I am Ellie","heloo","heloo ellie","bye ellie","goodbye","goodnight"]

let prefix = [];

function FindPrefix(str, str2) {
    let lengthStr = str.length;
    let lengthStr2 = str2.length;
    str = str.toLowerCase();
    str2 = str2.toLowerCase();
    if (lengthStr > lengthStr2) {
      for (let i = 0;i<lengthStr2;i++) {
        if (str2.substring(0, i + 1).includes(str.substring(0, i + 1))) {
          prefix.push(str2.substring(0, i + 1));
        }
      }
      if (prefix.length === 1) {
        console.log("1", prefix[0]);
      } else if (prefix.length !== 0) {
        console.log(prefix[prefix.length - 1]);
      } else {
        console.log("Empty");
      }
    } else {
      for (let i = 0; i < lengthStr; i++) {
        if (str.substring(0, i + 1).includes(str2.substring(0, i + 1))) {
          prefix.push(str.substring(0, i + 1));
        }
      }
      if (prefix.length === 1) {
        console.log("1", prefix[0]);
      } else if (prefix.length !== 0) {
        console.log("2", prefix[prefix.length - 1]);
      } else {
        console.log("Empty");
      }
    }
  }



function findLongestPrefix (array) {
   for(let i=0;i< array.length - 1;i++){
    let firstItem = array[i];
    let secondItem = array[i+1];
    FindPrefix(firstItem,secondItem);
   }
}


findLongestPrefix(example);
console.log("====")
findLongestPrefix(arr);

