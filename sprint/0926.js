/* Move Zeroes - Review

Time Complexity: O(2n) -> O(n)
Space Complexity: O(1)

*/

function moveZeroes(nums) {
    let notZeroIndex = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[notZeroIndex] = nums[i];
            notZeroIndex++
        }
    }
    for(let i = notZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

/* Palindrome Number - Review

Time Complexity: O(n)
Space Complexity: O(1)

*/

function isPalindrome(n) {
    if(n < 0) {
        return false;
    }
    let reversedNum = 0;
    for(let i = n; i >= 1; i=Math.floor(i/10)) {
        reversedNum = (reversedNum*10) + (i%10);
    }
    return n === reversedNum;
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

function reverseString(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
    return arr;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))