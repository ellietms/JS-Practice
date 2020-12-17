// Given an array of strings, find the longest common prefix of any two strings. 
//  you would return "Hello "

let arr = ["Hello Ellie", "Hello Daniel", "I like cheese"];
let example = ["I am Ellie","Helllooo","heloo ellie","bye ellie","goodbye","goodnight"]

function findLongestPrefix (array) {
    for(let i = 0 ; i < array.length - 1 ; i++){
        let firstItem = array[i];
        let secondItem = array[i+1];
        let firstPrefix = firstItem.split(" ")[0];
        let secondPrefix = secondItem.split(" ")[0];
        let firstPrefixLength = firstPrefix.length;
        let secondPrefixLength = secondPrefix.length;
        console.log("firstItem",firstItem);
        console.log("secondItem",secondItem);
        console.log("firstPrefix",firstPrefix);
        console.log("secondPrefix",secondPrefix);
        if(firstPrefixLength > secondPrefixLength) {
            console.log(firstPrefix);
            console.log(i);
        console.log("-----")
        }
        else{
            console.log(secondPrefix);
            console.log(i);
        console.log("-----")
        }
       
        
    }
}



findLongestPrefix(example);
