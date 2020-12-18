// Given an array of strings, find the longest common prefix of any two strings. 
//  you would return "Hello "

//I'm asking you to find the start of the string which is the same for both strings.
//The common prefix of any two of [“Hello”, “Hi”, “Cheese”] is “H”
//The common prefix of every string of [“Hello”, “Hi”, “Cheese”] is the empty string,
//because they don’t all share one prefix 

let arr = ["Hello Ellie", "Hello Daniel",, "I like cheese"];
let example = ["I am Ellie","heloo","heloo ellie","bye ellie","goodbye","goodnight"]

function findLongestPrefix (array) {
    let prefix = [];
   for(let i=0;i< array.length - 1;i++){
       //["I am Ellie","heloo"
    let firstItemLength = array[i].length; //10
    let secondItemLength = array[i+1].length;//5
    if(firstItemLength > secondItemLength){
        for(let j = 0 ; j < secondItemLength ; j++){
            if(array[i+1].toLowerCase().substring(0,j+1).includes(array[i].toLowerCase().substring(0,j+1))){
                prefix.push(array[i+1].toLowerCase().substring(0,j+1))
            }
        }
        if(prefix.length === 1){
            array = array.splice(i,i+2).splice(0,0,prefix[0]); 
            console.log("Array1",array);
            console.log("prefix1",prefix);
        }
        else if(prefix.length !== 0){
            array = array.splice(i,i+2).splice(0,0, prefix[prefix.length - 1]);
            console.log("Array2",array);
            console.log("prefix2",prefix);
        }
        else{
            prefix = []; 
            array = array.splice(i,i+1)
            console.log("Array3",array);
            console.log("prefix3",prefix);
        }
    }
    else{
        for(let j = 0 ; j < firstItemLength ; j++){
            if(array[i].toLowerCase().substring(0,j+1).includes(array[i+1].toLowerCase().substring(0,j+1))){
                prefix.push(array[i].toLowerCase().substring(0,j+1))
            }
        }
        if(prefix.length === 1){
            array = array.splice(i,i+2).splice(0,0,prefix[0]); 
            console.log("2Array1",array);
            console.log("2prefix1",prefix);
        }
        else if(prefix.length !== 0){
            array = array.splice(i,i+2).splice(0,0,prefix[prefix.length - 1]);
            console.log("2Array2",array);
            console.log("2prefix2",prefix);
        }
        else{
            prefix = []; 
            array = array.splice(i,i+1)
            console.log("2Array3",array);
            console.log("2prefix3",prefix);
        }
        
    } 
   }
}


findLongestPrefix(example);
console.log("====")
findLongestPrefix(arr);

