/* Two Sum

First Solution
- Run for loop to iterate through the array
- Create second for loop to iterate through the array again, it'll start at the index ahead of the first for loop
- Run conditional to test if the i and j add up to the target and return the values in an array

Additional
- Return multiple solutions

Time Complexity: O(n) ^ 2 - inner for loop
Space Complexity: O(n) - new data structure created;

*/

function twoSum(nums, target) {
    var solutions = [];
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                solutions.push([i, j]);
            }
        }
    }
    if(solutions.length === 0) {
        return -1;
    } else {
        return solutions;
    }
}

let arr1 =  [1, 2, 3, 4, 5];

console.log(twoSum(arr1, 15));