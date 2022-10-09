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