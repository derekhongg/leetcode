/* Find All Duplicates in an Array */

function findDupes(nums) {
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        let indx = Math.abs(nums[i]) - 1;
        let val = nums[indx];

        if(val < 0) {
            result.push(Math.abs(nums[i]))
        } else {
            nums[indx] = -nums[indx]
        }
    }
    return result;
}

function findTheDupe(nums) {
    let fast = 0;
    let slow = 0;

    while(true) {
        fast = nums[nums[fast]];
        slow = nums[slow];

        if(fast === slow) {
            let pointer = 0;
            
            while(pointer !== slow) {
                pointer = nums[pointer];
                slow = nums[slow];
            }
            return pointer;
        }
    }
}