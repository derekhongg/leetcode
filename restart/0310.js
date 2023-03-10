/* Two Sum

nums = [1,2,3,5,7] target = 9
Add two numbers from the array to equal target
If no two values add up to target, return -1

*/

var twoSum = function(nums, target) {
    let map = {};

    let combos = [];

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if(map[difference] !== undefined) {
            combos.push([map[difference], i]);
        } else {
            map[nums[i]] = i;
        }
    }
    if (combos.length > 0) {
        return combos;
    } else {
        return -1;
    }
}

let nums1 = [1,2,3,4,6,8];

console.log(twoSum(nums1, 94));

/* Palindrome Number

- Only for positive numbers
- Break down nums

*/

var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let temp = x;
    let reversedNum = 0;

    while(temp > 0) {
        let digit = temp%10;
        reversedNum = (reversedNum * 10) + digit;
        temp = Math.floor(temp/10);
    }

    return reversedNum === x;
}

/* Roman to Int

- Ensure only valid characters are involved

*/

var RomanToInt = function(s) {
    let numsMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let result = 0;

    for(let i = 0; i < s.length; i++) {
        if(!numsMap[s[i]]) {
            return "Please Enter a Valid Input."
        }
        if(numsMap[s[i]] < numsMap[s[i+1]]) {
            result -= numsMap[s[i]];
        } else {
            result += numsMap[s[i]];
        }
    }
    return result;
}

console.log(RomanToInt("IV"))
