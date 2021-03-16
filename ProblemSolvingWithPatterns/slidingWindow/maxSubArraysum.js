function maxSubarraySum(array, sumLength) {
  let maxSum = 0;
  let currentSum = 0;
  if (sumLength > array.length) return null;
  for (let i = 0; i < sumLength; i++) {
    currentSum += array[i];
  }
  maxSum = currentSum;
  for (let i = sumLength; i < array.length; i++) {
    currentSum = currentSum - array[i - sumLength] + array[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null
