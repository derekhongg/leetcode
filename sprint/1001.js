/* Contains Duplicate

Solution 1:
- Time Complexity: 
- Space Complexity:

Solution 2:
- Time Complexity:
- Space Complexity:

*/

function containsDupe(nums){
    let set = new Set(nums);
    return set.size !== nums.length;
}

function containsDuplicate(nums) {
    let numsHashMap = {};
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(numsHashMap[val] !== undefined) {
            return true;
        }
        numsHashMap[val] = 0;
        console.log(numsHashMap)
    }
    return false;
}

let arr1 = [1,2,3,3]

console.log(containsDuplicate(arr1))