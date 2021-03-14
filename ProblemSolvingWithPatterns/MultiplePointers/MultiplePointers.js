function averagePair(array,target){
    if(array.length === 0){
        return false;
    }
    let currentIndex = 0;
    for(let pointer = 1; pointer <= array.length - 1;pointer++){
        console.log("pointer",pointer);
        console.log("currentIndex",currentIndex);
        let average = (array[currentIndex] + array[pointer]) / 2;
        console.log("array[currentIndex] = ",array[currentIndex] , "array[pointer]" , array[pointer])
        console.log("average",average);
        console.log("=========")
        if(average === target){
            return true;
        }
        else if(pointer === array.length - 1){
            currentIndex += 1;
            pointer = currentIndex + 1
        }
        else if(currentIndex )
    } 
    return false; 
  }


  console.log(averagePair([1,2,3],2.5));
  averagePair([1,3,3,5,6,7,10,12,19],8);
  averagePair([-1,0,3,4,5,6],2.5);
  averagePair([],4);