

function recursiveRange(number){  
    if(number === 0){
        return 0;                     
    }
    return number + recursiveRange(--number);
}    

console.log(recursiveRange(8))
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 