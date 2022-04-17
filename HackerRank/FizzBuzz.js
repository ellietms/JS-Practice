function fizzBuzz(number) {
    let i = 1
    while(i < number + 1){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0 &&  i % 5 !== 0 ){
            console.log("Fizz");
        }
        else if (i % 5 === 0 &&  i % 3 !== 0){
            console.log("Buzz");
        }
        else if(i % 5 !== 0 && i % 3 !== 0){
            console.log(i)
        }
        i++;
    }
}

console.log(fizzBuzz(15))