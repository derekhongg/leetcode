/* Intersection of Two Arrays II */

var intersect = function(nums1, nums2) {
    let numsHashMap = {};
    let result = [];

    for (let i of nums1) {
        if(!numsHashMap[i]) {
            numsHashMap[i] = 1;
        } else {
            numsHashMap[i]++
        }
    }

    for (let i of nums2) {
        if(numsHashMap[i] > 0) {
            result.push(i);
            numsHashMap[i]--
        }
    }
    return result;
}

let arr1 = [4,4,9,5];
let arr2 = [4,2,3,4,5]

console.log(intersect(arr1, arr2))


/* Best Time to Buy or Sell a Stock */

var buyOrSell = function(nums) {
    let min = nums[0];
    let max = 0;

    for(let i = 0; i < nums.length; i++) {
        let difference = nums[i] - min;

        if(difference > max) {
            max = difference
        }
        if(nums[i] < min) {
            min = nums[i]
        }
    }
    return max;
}