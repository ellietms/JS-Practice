

function search(longString,pattern){
    let match = 0 ;
    for(let i = 0 ; i < longString.length ; i++){
        for(let j = 0 ; j < pattern.length ; j++){
            if(longString[i+j] !== pattern[j]){
                break;
            }
            if(j === pattern.length - 1){
                match++;
            }
        }
    }
    return match;
}



console.log(search("lorie loled","lo"));