/* Contains Duplicate */


function containsDupe (nums) {
    let numsHash = {};

    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(numsHash[val]) {
            return true;
        } else {
            numsHash[val] = 0;
        }
    }
    return false;
}