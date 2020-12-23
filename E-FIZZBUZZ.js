//write a function that outputs the string representation of numbers from 1 to n.
// for multiples of three it should output "Fizz"
//  for multiples of five it should output "Buzz"
// for multiples of 15 it should be "FizzBuzz"


function fizzBuzz(n){
    let fizzBuzzResult = [];
    for(let i= 1;i < n + 1;i++){
        if(i % 3 === 0 && i % 15 !== 0){
            fizzBuzzResult.push("Fizz"); 
        }
        else if(i % 5 === 0 && i % 15 !== 0){
            fizzBuzzResult.push("Buzz"); 
        }
        else if(i % 15 === 0){
            fizzBuzzResult.push("FizzBuzz"); 
        }
        else{
            fizzBuzzResult.push(`${i}`); 
        }
    }
    console.log("fizzBuzzResult",fizzBuzzResult);
}

fizzBuzz(15);
fizzBuzz(30)