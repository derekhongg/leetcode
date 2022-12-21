/* Two Sum */

var twoSum = function(nums, target) {
    let numsHash = {};

    for(let i = 0; i < nums.length; i++) {
        let difference = nums[i] - target;

        if(numsHash[difference] !== undefined) {
            return [numsHash[difference], i];
        } else {
            numsHash[nums[i]] = i
        }
    }
    return -1;
}

/* Merge Two Sorted Arrays */

var mergeArrays = function(nums1, m, nums2, n) {
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let i = m + n - 1;
    while(pointer2 >=0) {
        let firstVal = nums1[pointer1];
        let secondVal = nums2[pointer2];

        if(firstVal > secondVal) {
            nums1[i] = firstVal;
            pointer1--;
            i--;
        } else {
            nums1[i] = secondVal;
            pointer2--;
            i--
        }
    }
    return nums1;
}

let arr1 = [1,2,3,0,0,0];
let arr2 = [2,5,6];

console.log(mergeArrays(arr1, 3, arr2, 3))