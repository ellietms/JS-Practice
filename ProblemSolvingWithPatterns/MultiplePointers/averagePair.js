
function averagePair(sortedArray,targetAverage){
    if(sortedArray.length === 0){
        return false;
    }
    let currentIndex = 0;
    for(let pointer = currentIndex + 1 ; pointer <= sortedArray.length - 1;pointer++){
        let average = (sortedArray[currentIndex] + sortedArray[pointer]) / 2;
        if(average === targetAverage){
            return true;
        }
        else if(pointer === sortedArray.length - 1){
          currentIndex += 1;
           pointer = 1;
        }
        else if(currentIndex === sortedArray.length - 1){
            return false;
        }
        
    } 
    return false; 
  }


  console.log(averagePair([1,2,3],2.5)); //true
  console.log(averagePair([1,3,3,5,6,7,10,12,19],8));//true
  console.log(averagePair([],4));//false
  console.log(averagePair([-1,0,3,4,5,6],4.1));//false
  