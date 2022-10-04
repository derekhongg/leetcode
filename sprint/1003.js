/* Fibbonacci Number */

function fib(num) {
    if(num < 2) {
        return num;
    }
    let fib = [0,1];
    for(let i = 2; i <= num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[fib.length-1]
}

console.log(fib(6))

