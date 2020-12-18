// Write a function that will check the string is a palindrome or not.

const str = "EllE";
let newString = []

function palindrome(string){
    let arrayOfString = string.split("");
    console.log(arrayOfString);
    for(let i = 0 ; i < string.length ; i++){
        if(arrayOfString[i] === arrayOfString[string.length - (i+1)])
        {
            newString.push(arrayOfString[string.length - (i+1)])
        }
    }
    console.log("Results,",newString.join(""))
}

palindrome(str)