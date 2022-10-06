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