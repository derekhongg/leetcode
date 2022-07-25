// 205. Isomorphic Strings

// given two strings, if the characters in (s) can be replaced to get (t);
// s=egg t=add - true
// s=foo t=bar - false

let isIsomorphic = function(s, t){

};

// 128. Longest Consecutive Sequence

// Unsorted array;

let longestConsecutive = function(nums) {
    if (nums == null || nums.length === 0) { // if the array has nothing or length equals zero then return 0 as longest sequence;
        return 0;
    }
    const set = new Set(nums); // create new set to record the occurances of numbers in the array
    let max = 0; // returning this, we want to know what the max consecutive sequence would be
    for (let i of set) { // iterate through the set
        if(set.has(i-1)) { // if set has a value 1 less than the current value, continue through the loop
            continue
        }
        let currNum = i;
        let currMax = 1;
        while (set.has(currNum + 1)) { // while set has 1 number more than the currNum we will increment the currNum by 1 and the Max
            currNum++;
            currMax++
        }
        max = Math.max(max, currMax); // get the max between the max and currMax;
    }
    return max;
}