/* Reverse String 

- create two pointers
- swap the pointers at certain positions and increment/decrement when swap is completed
- return the string at the end

Time Complexity: O(N) - loop through once
Space Complexity: O(1) - Didn't create any new variables

*/

function reverseString(str){
    let start = 0; 
    let end = str.length - 1;

    while(start <= end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++
        end--
    }
    return str;
}

let s = ["h","e","l","l","o"];

console.log(reverseString(s));

/* Binary Search

- Create two pointers
- Run while loop 
- Create middle pointer in the loop
- Adjust pointer if target is not reached
- Return middle at the end
- Return -1 if target is not met

Time Complexity: O(log n) - Using Binary Search
Space Complexity: O(N) - No data structures created
*/

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start+end)/2);
        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target){
            start++
        } else if (nums[middle] > target) {
            end--
        }
    }
    return -1
}

let arrOfNums = [1, 3, 5, 2, 6];

console.log(binarySearch(arrOfNums, 7));