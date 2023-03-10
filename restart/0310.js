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
