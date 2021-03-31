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


// improvement of having less pairs for comparing their prefixes :
//  Right now you're finding the common prefix between every pair of strings -
//  can you solve the problem by only needing to compare fewer strings?)
// I think there is a way you can always not have to compare every element with every other element
function commonPrefix(array) {
  let prefix;
  let newPrefix = [];
  finalArray =  array.sort();
  console.log("finalArray", finalArray);
  for (let i = 0; i < finalArray.length - 1; i++) {
    prefix = FindPrefix(finalArray[i], finalArray[i + 1]);
    // improvement of if/else : if you know they all have the same length.
    if (
      newPrefix.length === 0 ||
      newPrefix[newPrefix.length - 1].length < prefix.length
    ) {
      newPrefix = [];
      newPrefix.push(prefix);
    } else if (
      newPrefix[newPrefix.length - 1].length === prefix.length &&
      newPrefix.includes(prefix) === false
    ) {
      newPrefix.push(prefix);
    }

    console.log("for this pair", finalArray[i], "-", finalArray[i + 1]);
    console.log("common prefix is : ", newPrefix);
    console.log("-----");
  }
  console.log("longest Prefix is :", newPrefix);
}



// Tests 

commonPrefix(["Turkey", "Goodbye", "Hello", "Hi", "Grapes", "Thanks"]);

commonPrefix(["Hello", "Hey", "Me", "Meep", "Pie", "Pierce"]);

commonPrefix([
  "I am Ellie",
  "helo",
  "heloo ellie",
  "bye ellie",
  "goodbye",
  "goodnight",
]);

commonPrefix(["Hello", "Hey", "Hi"]);

commonPrefix([
  "HellooEllie",
  "I like cheese",
  "HellooDaniel",
  "Halala",
  "Halalauu",
]);

commonPrefix([
  "H",
  "J",
  "HH",
  "JI",
  "JIN",
  "HIJ",
  "K",
  "B",
  "O",
  "Olu",
  "HJIO",
]);
