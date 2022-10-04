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



function fib2(num) {
    if (num < 2) {
        return num;
    }
    return fib(num-1) + fib(num-2)
}

console.log(fib2(6))

function removeElement(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length;
}

