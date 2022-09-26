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

console.log(isPalindrome(121))

console.log(Math.floor(1.2))
console.log(1%10)