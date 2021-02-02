// write a function that calculates the sum of all numbers from 1 up to some number(n)


function sum(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i
    }
    return(sum);
}

console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(10));