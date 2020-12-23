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

FindPrefix("Hello", "Heyloo");

// ["H","HY","L"]
function commonPrefix(array) {
  let prefix;
  let commonPrefixes = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      prefix = FindPrefix(array[i], array[j]);
      commonPrefixes.push(prefix);
      console.log("for this pair", array[i],"-" ,array[j]);
      console.log("common prefix is : ", prefix);
      console.group("-----");
    }
  }
  console.log("longest common prefix of this array is : ",commonPrefixes.sort((a,b) => b.length - a.length)[0]);
  console.log("-----");
}

commonPrefix(["I am Ellie","helo","heloo ellie","bye ellie","goodbye","goodnight"]);
commonPrefix(["Hello", "Hey", "Hi"]);
commonPrefix([
  "Helloo Ellie",
  "I like cheese",
  "Helloo Daniel",
])