

function areThereDuplicates(...arguments){
    let allArguments = [...arguments]
    let result = {};
    for(let i = 0 ; i < allArguments.length ; i++){
        result[allArguments[i]] = (result[allArguments[i]] || 0) + 1
    }
    for(let i = 0 ; i < allArguments.length ; i++){
        if(result[allArguments[i]] > 1){
            return true;
        }
    }
    return false;
    
}


console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates("a","b","c","a"));
console.log(areThereDuplicates("a","b","c"));
console.log(areThereDuplicates(1,2,4,5,5));
