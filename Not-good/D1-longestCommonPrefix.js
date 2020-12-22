// Given an array of strings, find the longest common prefix of any two strings. 
//  you would return "Hello "
//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 


let prefix = [];

function FindPrefix(str, str2) {
    let lengthStr = str.length;
    let lengthStr2 = str2.length;
    str = str.toLowerCase();
    str2 = str2.toLowerCase();
    if (lengthStr  > lengthStr2 & lengthStr !== 0 & lengthStr2 !== 0) {
      for (let i = 0;i<lengthStr2;i++) {
        if (str2.substring(0, i + 1).includes(str.substring(0, i + 1))) {
          prefix.push(str2.substring(0, i + 1));
        }
      }
    } else  if(lengthStr  < lengthStr2 & lengthStr !== 0 & lengthStr2 !== 0){
      for (let i = 0; i < lengthStr; i++) {
        if (str.substring(0, i + 1).includes(str2.substring(0, i + 1))) {
          prefix.push(str.substring(0, i + 1));
        }
      }
    }
    else{
        console.log("empty");
    }
  }



function findLongestPrefix (array) {
   for(let i=0;i< array.length - 1;i++){
    let firstItem = array[i];
    let secondItem = array[i+1];
    FindPrefix(firstItem,secondItem);
   }
   console.log("Longest Prefix in the array is : ",prefix[prefix.length - 1])
}


let arr = ["Hello Ellie", "Hello Daniel", "I like cheese"];
let example = ["I am Ellie","heloo","heloo ellie","bye ellie","goodbye","goodnight"]


console.log("====")
findLongestPrefix(arr);
console.log("====")
findLongestPrefix(example);
console.log("====")