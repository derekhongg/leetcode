/* Contains Duplicate 

- Create Hashmap
- Loop through the array
- If it exists, return true, else return false

*/

var containsDuplicate = function(nums) {
    let numsHash = {};

    for(let i = 0; i < nums.length; i++) {
        if(numsHash[nums[i]] !== undefined) {
            return true;
        } else {
            numsHash[nums[i]] = 0;
        }
    }
    return false;
}

/* Maximum Subarray

- Create running total
- Loop through array

*/

var maxSubArray = function(nums) {
    let current = nums[0];
    let total = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(current < 0) {
            current = nums[i];
        } else {
            current += nums[i];
        }

        if(current > total) {
            total = current;
        }
    }
    return total
}