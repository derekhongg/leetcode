/* Find Pivot Index

- Set up total sum variable
- set up leftSum variable to test and return values
- Subtract total sum from (leftSum & value at arr) and compare it to the leftSum
- return -1 if no values exist

Time Complexity: O(n+m)
Space Complexity: O(1)

*/

function findPivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for(let j = 0; j < nums.length; j++) {
        if(totalSum - leftSum - nums[j] === leftSum) {
            return true;
        }
        leftSum += nums[j];
    }
    return -1;
}