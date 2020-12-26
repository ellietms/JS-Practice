// given an integer , show it is the power of 2 or not .

function isPowerTwo(number){
    // 218
    let i = 1;
    while(i < number){
        i = i * 2;
    }
    console.log("answer is : ",i === number);
}

isPowerTwo(218);
isPowerTwo(124);
isPowerTwo(1024);