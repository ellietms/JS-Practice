function checkSorted(array){
    console.log("WORKING")
    for(i = 0; i < array.length - 1; i ++);{
    if (array[i] < array[i+1]) {
        return true;
    }else{
        return false;
    }
 }
}


function gridChallenge(array) {
    array = array.sort()
    let arrayAllStrs = []
    let arrayWords;
    let arrayWordssameColumn = [];
    
    for(let i = 0 ; i < array.length ; i++){
        arrayWords = array[i].split("")
        arrayAllStrs.push(arrayWords)
    }
    
    for(let i = 0 ; i < array.length ; i++){
        for(let j =0 ; j < array.length ; j++){
            arrayWordssameColumn.push(arrayAllStrs[i][j])
        }
        if(!checkSorted(arrayWordssameColumn)){
            return "NO"  
        } 
        arrayWordssameColumn = []
    }
    return "YES"
}


console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))