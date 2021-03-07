function productOfArray(array){
    let num;
    if(array.length === 0){
        return 0;
    }
    function helper(array){
        if(array.length === 0){
            return 1;
        }
        num  = array[0];
        num = num * helper(array.slice(1))
        return num;
    }
    helper(array);
    return num;
}

console.log((productOfArray([1,2,3]))) // 6 
console.log((productOfArray([1,2,3,10]))) // 60
