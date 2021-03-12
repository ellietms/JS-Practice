// given an array of integers, find if the array contains any duplicates


function isDuplicate(array){
    let answer;
    for(let i = 0 ; i < array.length ; i++){
       for(let j = i + 1 ; j < array.length ; j++){
           if(array[i] === array[j]){
              answer = true;
           }
           else{
               answer = false;
           }
       }
       if(answer === true){
           break;
       }
    }
    console.log(answer);
}


isDuplicate([1,2,3,1]);
isDuplicate([1,2,3,4]);
isDuplicate([1,1,1,3,3,4,3,2,4,2]);