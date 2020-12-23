// Given an array of strings, find the longest common prefix of any two strings. 
// you would return "Hello "
//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 
//  how can you compare all of the elements to find the longest common prefix of any two?


// Given an array of strings, find the longest common prefix of any two strings. 
// Goals :
// Be able to find a common prefix between two strings
// Be able to find each pair
// Find the common prefix between each pair
// Find the longest one




// Steps : 
//1- try to write your function to print out the pairs
//to compare every pair of elements, you probably need two loops, one inside the other
//2- after that :  instead of printing out the pairs, print out the common prefix of each pair
// 3-Then instead of printing, make an array of them
// 4-And then find the longest one


let example = [
    "Helloo Ellie",
    "I like cheese",
    "Helloo Daniel",
  ];

  let arr = ["I am Ellie","heloo","heloo ellie","bye ellie","goodbye","goodnight"]



// step 1 - print Pairs
function printPairs (array){
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0 ; j < array.length; j++){
            if( array[i] !==  array[array.length - j] && array[i] !== undefined && array[array.length - j] !== undefined){
                let pairs = [array[i],array[array.length - j]];
                // console.log(pairs)
            }
        }
    }
}



//  ---------------------------------------------------------- 
//step 2 - show prefix
function FindPrefix(str, str2) {
    let prefix = "";
    let lengthStr = str.length;
    let lengthStr2 = str2.length;
    let length = Math.min(lengthStr,lengthStr2)
      for (let i = 0;i<length;i++) {
        if (str2.charAt(i) === str.charAt(i)) {
          prefix = prefix.concat(str2.charAt(i));
        }
        else{
          break;
        }
      }
      return (prefix);
    } 
// ----------------------------------------------------------------

function printCommonPrefix (array){
    let finalResults;
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0 ; j < array.length; j++){
            if( array[i] !==  array[array.length - j] && array[i] !== undefined && array[array.length - j] !== undefined){
                finalResults = FindPrefix(array[i],array[array.length - j]);
            }
        }
    }
    console.log("Longest Prefix in the array is : ",finalResults);
    console.log("---")
}

// printCommonPrefix(example);
printCommonPrefix(arr);