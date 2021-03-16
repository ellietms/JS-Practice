

function minSubArrayLen(array,integer){
    let sum = 0;
    let window = 1;
        for(let i = 0; i < array.length ;i++){
            if(window === 1){
                sum = array[i];
            }
            else if(window > 1){
                sum = sum - array[i - window] + array[i]
            }
            if(sum >= integer){
                return window;
            }
            else if(i === array.length - window){
                ++window;
                if(window === 2){
                    sum = array[0] + array[1];
                }
                i = window;
           }
        }
    return 0;
}


console.log(minSubArrayLen([2,3,1,2,4,3],7));
console.log(minSubArrayLen([2,1,6,5,4],9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([4,3,3,8,1,2,3],11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));