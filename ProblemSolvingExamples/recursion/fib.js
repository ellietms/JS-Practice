// fibonacci sequence

function fib(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(4)); // 3      1+1 +2+3   f(3) => f(1) + f(0) f(4) => f(3) + f(2)  1
// f(2) + f(1)
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
