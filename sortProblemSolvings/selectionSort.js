

function selectionSort(array){
    let min = array[0];
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] < min){
            min = array[i];
        }
        if(i === array.length - 1){
            array[0] = min;
        }
    }
}



selectionSort([34,22,10,17,19]);