/* Move Zeroes */

function moveZeros(nums) {
    let nonZeroIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]]
            nonZeroIndex++
        }
    }
    return nums;
}

console.log(moveZeros([1,0,3,4,0,2]))