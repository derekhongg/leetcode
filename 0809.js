/* Running Sum */

function runningSum(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i]+=nums[i-1]
    }
    return nums;
}

// Contains Duplicate
function containsDuplicate(nums) {
    let numsHashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in numsHashMap) {
            return true;
        }
        numsHashMap[nums[i]] = 0;
    }
    return false;
}