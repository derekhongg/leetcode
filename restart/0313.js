/* Binary Search */


var binarySearch = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start+end)/2);

        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else if(nums[middle] > target) {
            end = middle - 1;
        }
    }
    return -1;
}

/* Move Zeroes */

var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
            nonZeroIndex++;
        }
    }
    return nums;
}

/* Remove Element

- 

*/