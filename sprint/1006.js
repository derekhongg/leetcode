/* House Robber */

function houseRobber(nums) {
    if(nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0]
    }
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    for(let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i]);
    }
    let numsLength = nums.length
    return Math.max(nums[numsLength-1], nums[numsLength-2])
}

/* Two Sum */

function twoSum(nums, target) {
    let numsHashMap = {};
    let solutions = [];
    for(let i = 0; i < nums.length; i++) {
        let complementValue = target - nums[i];
        if(numsHashMap[complementValue] !== undefined) {
            solutions.push([numsHashMap[complementValue], i]);
        } else {
            numsHashMap[nums[i]] = i;
        }
    }
    return solutions;
}

let arr1 = [1,2,3,4,5]

console.log(twoSum(arr1, 7));

/* Search Insert Position - Optimized */

function insertPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    for(let i = 0; i < nums.length; i++) {
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target) {
            return target;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else if(nums[mid] > target) {
            end = mid - 1;
        }
    }
    return start;
}


/* Roman to Int

Set up hashmap for roman to int values
set up variable for total then continue adding or subtracting depending on value

*/

function romanToInt(s) {
    let romanMap = {
        'I': 1,
        'V': 5, 
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if(romanMap[s[i]] < romanMap[s[i+1]]) {
            result -= romanMap[s[i]];
        } else {
            result += romanMap[s[i]];
        }
    }
    return result;
}

let arr2 = [1,2,3,4,5]

for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] === 3) {
        arr2.splice(i, 1)
    }
}

console.log(arr2)

function reverseWords(s) {
    let sSplit = s.split(" ");
    let start = 0;
    let end = sSplit.length - 1;
    for(let i = 0; i < sSplit.length; i++) {
        if(sSplit[i] === '') {
            sSplit.splice(i, 1);
        }
    }
    console.log(sSplit)
    while(start<=end){
        [sSplit[start], sSplit[end]] = [sSplit[end], sSplit[start]];
        start++
        end--
    }
    return sSplit.join(" ")
}




function reverseWords2(s) {
    let strSplit = s.split(' ');
    let reversedStr = '';

    for(let i = strSplit.length - 1; i >= 0; i--) {
        if(strSplit[i] !== '') {
            if(reversedStr.length > 0) {
                reversedStr += ' ';
            }
            reversedStr += strSplit[i];
        }
    }
    return reversedStr
}

var addDigits = function(num) {
    let n = num;
    while(n >= 10) {
        let total = 0;
        while(n > 0) {
            total = total + (n%10);
            n = Math.floor(n/10)
        }
        n = total
    }
    return n;
};

console.log(addDigits(38))


