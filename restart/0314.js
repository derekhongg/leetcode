/* Reverse String

- Set start and end pointers
- Swap pointers 

*/

var reverseString = function(str) {
    let start = 0;
    let end = str.length - 1;

    while(start <= end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
    }
    return str
}

let arr1 = ['a', 'p', 'p', 'l', 'e'];

console.log(reverseString(arr1));


/* Insert Position

- Start and end pointers
- adjust
- return start pointer

*/

var insertPosition = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start+end)/2);

        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else if(nums[middle] > target) {
            end = middle - 1;
        }
    }
    return start;
}


/* Pivot Index */

var pivotIndex = function(nums) {
    let totalSum = 0;
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for(let j = 0;  j < nums.length; j++) {
        if(totalSum - leftSum - nums[i] === leftSum) {
            return j;
        } else {
            leftSum += nums[j]
        }
    }
    return -1;
}