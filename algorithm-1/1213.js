/* Sorted Squares of An Array
Two Pointer
nums = [-4,-2, 0, 1, 5, 10] => [0, 1, 4, 25, 100]

*/

function sortedSquares(nums) {
    let result = [];
    let start = 0;
    let end = nums.length - 1;
    let index = end;

    while(start <= end) {
        if(nums[end] ** 2 > nums[start] ** 2) {
            result[index] = nums[end] ** 2;
            index--;
            end--
        } else {
            result[index] = nums[start] ** 2;
            index--;
            start++
        }
    }
    return result;
}

console.log(sortedSquares([-4,-2, 0, 1, 5, 10]))

/* Rotate Array

nums = [1,2,3,4,5,6,7];
k = 3

nums => [5,6,7,1,2,3,4]

*/

function reverseNums(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--
    }
}

function rotateArray(nums, k) {
    k = k % nums.length;
    nums.reverse();
    reverseNums(nums, 0, k-1);
    reverseNums(nums, k, nums.length-1)
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))