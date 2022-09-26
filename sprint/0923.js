/* Longest Consecutive Sequence 

- Create Hashset so only has unique values
- iterate thorugh set
- create two variables to track the max and the current number the loop is on


Time Complexity:O(2n) -> O(n)
Space Complexity:O(n)
*/

function longestConsecutive(nums) {
    if(nums == null || nums.length == 0) {
        return 0;
    }
    const set = new Set(nums);
    let max = 0;
    for(i of set) {
        if(set.has(i-1)) {
            continue;
        }
        let currNum = i;
        let currMax = 1;
        while(set.has(currNum+1)) {
            currNum++;
            currMax++;
        }
        max = Math.max(currMax, max);
    }
    return max;
}