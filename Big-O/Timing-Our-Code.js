// write a function that calculates the sum of all numbers from 1 up to some number(n)

// differences between different solutions : 

https://rithmschool.github.io/function-timer-demo/

// my solution
function sum(n){
    let sum = 0;
    for(let i = 1 ; i <= n ; i++){
        sum += i
    }
    return(sum);
}


// Better solution
function sumBetter(n){
    return n * (n+1) / 2
}



// let time1 = performance.now();
console.log(sum(200));
// let time2 = performance.now();
// console.log(`time for my solution ${time2 - time1}`)

// let time3 = performance.now();
console.log(sumBetter(200));
// let time4 = performance.now();
// console.log(`time Better Solution ${time4 - time3}`);

