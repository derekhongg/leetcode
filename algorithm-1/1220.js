/* Contains Duplicate */


function containsDupe(nums) {
    let numsHash = {};

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (numsHash[val]) {
            return true;
        } else {
            numsHash[val] = 0;
        }
    }
    return false;
}

function maxSubArray(nums) {
    let current = nums[0];
    let total = nums[0];

    for(let i = 0; i < nums.length; i++) {
        if(current < 0) {
            current = nums[i]
        } else {
            current += nums[i]
        }

        if(current > total) {
            total = current;
        }
    }
    return total;
}