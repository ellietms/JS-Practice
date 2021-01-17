// I want you to write a function which accepts a string as a parameter, and returns a new string
// The new string should be the same as the old one, but all of the upper case letters first,
// then all of the lower case letters, in the order that they occurred in the original string

let example ="Hello Ellie! How are you today? I like CHEESE"
// HEHICHEESEello llie! ow are you today?  like 


function messyString(string){
    let index = 0;
    let count = 0;
    let allLettersArray = string.split("");
    let allUpperCases = [];
    while(index !== string.length){
       if(string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90){
            allUpperCases.push(string[index]);
            string.slice(index,index+1);
            allLettersArray.splice(index - count,1);
            count++;
        }
       index = index + 1;
    }
    let messyString = allUpperCases.join("");
    allLettersArray.splice(0,0,messyString);
    let finalString = allLettersArray.join("");
    return finalString;
    
}

console.log(messyString(example));