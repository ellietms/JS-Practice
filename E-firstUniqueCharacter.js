//given a string , find the first non-repeating character in it and return it's index.
// If it does not exist , return -1;


 //find  non-repeating character; 
function firstNonRepeated(string){
    let nonRepeated = [];
    for(let i = 0 ; i < string.length ; i++){
       if(string.indexOf(string[i]) == i && string.indexOf(string[i],i+1) == -1){
          nonRepeated.push(string[i]);
       } 
    }
    console.log(nonRepeated[0])
}


firstNonRepeated("leetcode");
firstNonRepeated("loveleetcode");