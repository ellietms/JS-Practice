function zigZag(array){
    array.sort((a,b) => a - b)
    const lengthArr = array.lengthArr 
    let middleIndex = (lengthArr / 2 ) - 1
    array[middleIndex], array[lengthArr - 1] = array[lengthArr - 1] ,  array[middleIndex]
    let increaseIndx = middleIndex
    let decreaseIndx = (lengthArr - 1) - 1
    while(increaseIndx < decreaseIndx){
        array[increaseIndx] , array[decreaseIndx] = array[decreaseIndx] , array[increaseIndx]
        increaseIndx++;
        decreaseIndx--;
    }
    return array
 }

zigZag([1,4,2])
