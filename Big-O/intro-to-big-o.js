// Write a function that accepts a string and returns a reversed copy

// my first solution
function  reversedString(string) {
    let arrayOfString = string.split("");
    return arrayOfString.reverse().join("");

}

console.log(reversedString("Ellie"))
