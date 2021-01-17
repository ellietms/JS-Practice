// I want you to write a function which accepts a string as a parameter, and returns a new string
// The new string should be the same as the old one, but all of the upper case letters first,
// then all of the lower case letters, in the order that they occurred in the original string

let example = "Hello Ellie! How are you today? I like CHEESE";
// HEHICHEESEello llie! ow are you today?  like

function messyString(string) {
  let index = 0;
  let firstString = string;
  let allUpperCases = "";
  while (index !== firstString.length) {
    if (
      firstString.charCodeAt(index) >= 65 &&
      firstString.charCodeAt(index) <= 90
    ) {
      allUpperCases = allUpperCases.concat(firstString[index]);
      string = string.replace(firstString[index], "");
    }
    index = index + 1;
  }
  return allUpperCases.concat(string);
}

console.log(messyString(example));
