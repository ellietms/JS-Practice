function miniMaxSum(arr) {
    // Write your code here
    let allSum = [];
    let minSum;
    let maxSum;
    for(let i = 0 ; i < arr.length ; i++){
        let filteredArr = arr.splice(i)  
        console.log("ARR", filteredArr)
        let currentSum = filteredArr.reduce((pervious, current) => pervious + current )
        allSum.push(currentSum)
    }
    minSum = Math.min(...allSum)
    maxSum = Math.max(...allSum)
    console.log(minSum, maxSum)
}

miniMaxSum([1,2,3,4])

