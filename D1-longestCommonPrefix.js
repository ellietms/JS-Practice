// Given an array of strings, find the longest common prefix of any two strings. 
// you would return "Hello "
//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 
//  how can you compare all of the elements to find the longest common prefix of any two?


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

let prefix = [];
let prefixes = [];

//step 2 - show prefix
function FindPrefix(str, str2) {  
    let lengthStr = str.length;
    let lengthStr2 = str2.length;
    str = str.toLowerCase();
    str2 = str2.toLowerCase();
    if (lengthStr > lengthStr2 && lengthStr !== 0 && lengthStr2 !== 0 ) {  
      for (let i = 0;i<lengthStr2;i++) {
        if(str2.substring(0, i + 1).includes(str.substring(0, i + 1)) ) {  
          prefix.push(str2.substring(0, i + 1));
        }
      }
      prefixes.push(prefix[prefix.length - 1]);
      console.log("PREFIXES",prefixes);
    } 
    else  if(lengthStr < lengthStr2 && lengthStr !== 0 && lengthStr2 !== 0){
      for (let i = 0; i < lengthStr; i++) {
        if(str.substring(0, i + 1).includes(str2.substring(0, i + 1))) {
            prefix.push(str.substring(0, i + 1));
        }
      }
      prefixes.push(prefix[prefix.length - 1]);
      console.log("PREFIXES",prefixes);
    
    }
    else{
      console.log("")
    }
    prefixes = prefixes.filter((data,index,wholeData) =>  wholeData.indexOf(data) === index);
    console.log("P",prefixes);
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
    console.log("Longest Prefix in the array is : ",finalResults.sort((a,b) => b.length - a.length)[0]);
    console.log("---")
}

// printCommonPrefix(example);
printCommonPrefix(arr);