/* Two Sum

First Solution
- Run for loop to iterate through the array
- Create second for loop to iterate through the array again, it'll start at the index ahead of the first for loop
- Run conditional to test if the i and j add up to the target and return the values in an array

Time Complexity: O(n) ^ 2 - inner for loop
Space Complexity: O(n) - new data structure created;

Second Solution (More efficient solution)
- Create empty hashmap and loop through
- Create complement variable to assist

Time Complexity: O(n)
Space Complexity: O(n)

Additional
- Return multiple solutions

*/

function twoSum(nums, target) {
    let solutions = [];
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

function twoSum2(nums, target) {
    let solutions = [];
    let hashmap = {};
    for(let i = 0; i < nums.length; i++) {
        let complementValue = target - nums[i];
        if(hashmap[complementValue] !== undefined) {
            solutions.push([hashmap[complementValue], i]);
        } else {
            hashmap[nums[i]] = i;
        }
    }
    return solutions;
}

let arr1 =  [1, 2, 3, 4, 5];

console.log(twoSum2(arr1, 7));

/* Isomorphic Strings

-Create two objects for the parameters
-Check if the two parameters are equal in length
-Loop through one of the parameters
-Check if the objects match


*/

function isIsomorphic(s, t) {
    let obj1 = {};
    let obj2 = {};
    if(s.length !== t.length) {
        return false;
    }
    for(let i = 0; i < t.length; i++) {
        if(obj1[s[i]] !== obj2[t[i]]) {
            return false;
        } else {
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
}

console.log(isIsomorphic("dff", "egg"));