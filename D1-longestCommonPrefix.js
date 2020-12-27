// can you just write a function which, if you give it two strings, will return the common prefix of the two strings?
//  For function :
// Initially, the common prefix is empty.
// Then, we’ll look at each letter, and if they’re the same, we’ll add them to the common prefix.
// We need to stop when we run out of letters in either word, or when the letters are different.

function FindPrefix(str1, str2) {
  let prefix = "";
  let lengthStr1 = str1.length;
  let lengthStr2 = str2.length;
  let length = Math.min(lengthStr1, lengthStr2);
  for (let i = 0; i < length; i++) {
    if (str2.charAt(i) === str1.charAt(i)) {
      prefix = prefix.concat(str2.charAt(i));
    } else {
      break;
    }
  }
  return prefix;
}

//  Right now you're finding the common prefix between every pair of strings -
//  can you solve the problem by only needing to compare fewer strings?)

function deleteExtras(array) {
  let firstLetters = [];
  let removedOnes = [];
  for (let i = 0; i < array.length; i++) {
    firstLetters.push(array[i].charAt(0));
  }
  let length =  firstLetters.length;
  for (let i = 0; i < length; i++) {
    if (
      firstLetters.indexOf(firstLetters[i]) === i &&
      firstLetters.indexOf(firstLetters[i], i + 1) === -1
    ) {
      removedOnes.push(firstLetters[i]);
      firstLetters.splice(i, 1);
      i = i - 1;
    }
  }
  for (let i = 0; i < removedOnes.length; i++) {
    array = array.filter((element) => element.charAt(0) !== removedOnes[i]);
  }
  return array;
}

function commonPrefix(array) {
  let prefix;
  let newPrefix = [];
  let newArray = deleteExtras(array);
  console.log("Final Array without extras : ", newArray);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      prefix = FindPrefix(newArray[i], newArray[j]); 
      //if you know they all have the same length.
      if (newPrefix.length === 0) {
        newPrefix.push(prefix);
      }
       else if (newPrefix[newPrefix.length - 1].length < prefix.length && newPrefix.includes(prefix) === false ) {
       for(let i = 0 ; i < newPrefix.length ; i++){
        if(newPrefix[i].length !== prefix.length){
          newPrefix.splice(i,1);
          i = i -1;
        }
       }
       newPrefix.push(prefix);
      } 
      else if (newPrefix[newPrefix.length - 1].length === prefix.length && newPrefix[newPrefix.length - 1] !== prefix && newPrefix.includes(prefix) === false ) {
        newPrefix.push(prefix);
      } 
      else if (newPrefix[newPrefix.length - 1] > prefix.length) {
        newPrefix = newPrefix;
      }

      console.log("for this pair", newArray[i], "-", newArray[j]);
      console.log("common prefix is : ", newPrefix);
      console.log("-----");
    }
  }
  // You don't need to sort an array of strings by their length, if you know they all have the same length.
  console.log("longest Prefix is : ",newPrefix);
}

commonPrefix(["Hello", "Hey", "Me", "Meep", "Pie", "Pierce"]);
//  commonPrefix(["Hello", "Hi", "Me", "Meep"]);
commonPrefix([
  "I am Ellie",
  "helo",
  "heloo ellie",
  "bye ellie",
  "goodbye",
  "goodnight",
]);

commonPrefix(["Hello", "Hey", "I","Hi"]);

 commonPrefix([
  "HellooEllie",
  "I like cheese",
  "HellooDaniel",
  "Halala",
  "Halalauu",
]);


commonPrefix(["H","J","HH","JI","JIN","HIJ","K","B","O","Olu","HJIO"])