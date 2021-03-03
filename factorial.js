// NOt recursive
function factorial(num){
    let total = 1;
    for(let i = num;i>1;i--){
        total *= i;
        // console.log(total);
    }
    return total;
}



console.log("2 =" ,factorial(2));
console.log("NEXT");
console.log("3 = ",factorial(3));
console.log("NEXT");
console.log("4 = ",factorial(4));
console.log("NEXT");
console.log("5 =" ,factorial(5));
console.log("NEXT");