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

//First bad version 

var solution = function(isBadVersion) { // this will be a boolean
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n;
        let middle = Math.floor((start+end)/2);
        while(middle !== start && middle !== end) {
            if(!isBadVersion(middle)) {
                start = middle;
            } else {
                end = middle;
            }
            middle = Math.floor((start+end)/2)
        }
        return middle + 1;
    }
};