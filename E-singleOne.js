// given a non-empty array of integers,every element appears twice except for one,find that single one.


function singleOne(array){
    let singleOne = "";
    let length = array.length
    for(let i=0;i < length;i++){
        let result = array.some(element => element == array[0])
        if(result === true){
            array = array.filter(element => element !== array[0]);
         }
         if(array.length === 1 && result === true){ 
            singleOne = singleOne.concat(array[0]) 
        }
    
}
console.log("singleOne",singleOne)
console.log("---")
}



singleOne([1,2,1,2,4]);
singleOne([2,2,1]);
singleOne([5,9,5,9,6,7,7,6,2]);
singleOne([0,0,7,8,9,8,7,9,1]);