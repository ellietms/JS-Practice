
// I want you to write a function which accepts a string as a parameter, and returns a new string
// The new string should be the same as the old one, but all of the upper case letters first,
// then all of the lower case letters, in the order that they occurred in the original string

let example ="Hello Ellie! How are you today? I like CHEESE"
// HEHICHEESEello llie! ow are you today?  like 

function messyString(string){
    let i = 0;
    let allLettersArray = string.split("");
    let allUpperCases = [];
    while(i !== string.length){
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            allUpperCases.push(string.slice(i,i+1));
            string = string.slice(i+1);
            i = 0;
        }
        else{
            i = i + 1;
        }
    }
    console.log("allUpperCases",allUpperCases);
    console.log("allLettersArray",allLettersArray);
}

messyString(example);