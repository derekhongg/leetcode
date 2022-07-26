// 1. Longest consecutive Sequence
//Questions: are there duplicates to this? will there be negative values? any values are null? will there be just integers? 
// add values into new set
// loop thorugh the entire set and if the value at this certain index has a value 1 less than it, we continue the loop
// create the current max and currNumber we will increment when currNum has a value 1 more than it
// return the max between currMax and currNum;

function longestConsecutiveSequence(nums) {
    if(nums == null || nums.length ===0) {
        return 0;
    }
    const consecutiveSet = new Set(nums);
    let max = 0;
    for(let i of consecutiveSet) {
        if(consecutiveSet.has(i-1)) {
            continue;
        }
        let currentNum = i;
        let currentMax = 0;
        while(Set.has(currentNum+1)) {
            currentMax++
            currentNum++
        }
        max = Math.max(max, currentMax)
    }
    return max;
}