
function collectOdds(array){
    let results = [];
    function findOdds(array){
        if(array.length === 0){
            return
        }
        if(array[0] % 2 !== 0){
            results.push(array[0]);
        }
        findOdds(array.slice(1));
    }
    findOdds(array);
    return results;
}


console.log(collectOdds([1,2,3,4]));
console.log(collectOdds([1,2,3,4,5,6,7,8]));