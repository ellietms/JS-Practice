

function isSubsequence(string1,string2) {
let count = 0;
let currentIndex = 0
  for(let pointer = 0 ; pointer < string2.length ; pointer++ ){  
      if(string1[currentIndex] === string2[pointer]){
          currentIndex += 1;
          count++;
      }
  }
  if(count === string1.length){
    return true;
  }
  return false;
}

console.log(isSubsequence("hello","hello world"));//true
console.log(isSubsequence("sing","sting"));//true
console.log(isSubsequence("abc","abracadabra"));//true
console.log(isSubsequence("abc","acb"));//false