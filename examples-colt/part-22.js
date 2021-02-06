// write a function which takes a string and returns counts of each character

// questions :
// how long is the string?
// can I count the space or numbers?
// if it is an empty string what  should I do?
// if the character is upperCase what I should do?if I should not worry about upperCases what I should do instead?
// what the output should look like , is object or array?
// if the output is invalid what should I return

function  charCount(string) {
    // go over each character in the string
    // if the result object has the character add one to the value of it
    // if the result object does not have the character add it as the key to the result object and set the value of it to one
    // if the input string is empty return No character
    // if the character is space do not do anything
    // return the object result
    let i = 0;
    let results= {};
    while( i < string.length){
        if(results[string[i]] > 0){
            results[string[i]]++;
        }
        else{
            results[string[i]] = 1;
        }
        i++;
    }
    if(string.length !== 0){
        return results;
    }
    return "NO Character"
}

console.log(charCount("Hello hi"))
console.log(charCount(""))
