function maxSum(array){
    let sum = [];
    let n = array.length;
    let movedElement;
    let currentSum;
    for (let i = 0 ; i < n  ; i++){
        movedElement = array.pop()
        array.unshift(movedElement)
        currentSum = array.reduce((perviousResult, currentValue, currentIndex, array) => perviousResult + currentIndex * currentValue , 0)
		sum.push(currentSum)
    }
    return Math.max(...sum)
}
