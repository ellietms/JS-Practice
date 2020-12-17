// Given an array of strings, find the longest common prefix of any two strings. 
//  you would return "Hello "

//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 

let arr = ["Hello Ellie", "Hello Daniel", "I like cheese"];
let example = ["I am Ellie","heloo","heloo ellie","bye ellie","goodbye","goodnight"]

function findLongestPrefix (array) {
    let longestPrefix =[];
    for(let i=0; i < array.length - 1 ; i++){
        let anyTwoItems = array.slice(i,i+2);
        let firstItem = anyTwoItems[0].split("");
        let secondItem = anyTwoItems[1].split("");
        let prefix = "";
        for(let j=0;j<firstItem.length;j++){
            if(firstItem[j] === secondItem[j]){
                prefix.concat(firstItem[j])
            }
        }
        longestPrefix.push(prefix)
    }
    console.log(longestPrefix);
}


findLongestPrefix(example);
console.log("====")
findLongestPrefix(arr);

