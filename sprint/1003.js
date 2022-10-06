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

// console.log(fib2(6))

function removeElement(nums, val) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        if(nums[start] === val) {
            nums[start] = nums[end]
            end--
        } else {
            start++
        }
    }
    return start;
}

/* Palindrome String

-Example: "hannah"

*/

function palindromeString(str) {
    let reversedStr = "";
    for(let i of str) {
        reversedStr = reversedStr + i
    }
    return str === reversedStr
}

// console.log(palindromeString('hannah'))

function kidsWithCandies(candies, extraCandies) {
    let max = Math.max(...candies)
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= max) {
            candies[i] = true;
        } else {
            candies[i] = false;
        }
    }
    return candies
}

let arr1 = [2,3,5,1,3]

console.log(kidsWithCandies(arr1, 3))

function mergeTwoTrees(t1, t2) {
    if(!t1) {
        return t2
    }
    if(!t2) {
        return t1;
    }
    t1.val += t2.val;
    t1.left = mergeTwoTrees(t1.left, t2.left);
    t1.right = mergeTwoTrees(t1.right, t2.right);
    return t1;
}