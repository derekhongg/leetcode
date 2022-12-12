/* Binary Search

[0, 1, 3, 4, 5, 9] target = 5 -> return 4

*/

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end)/2)
        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else if(nums[middle] > target) {
            end = middle - 1;
        }
    }
    return -1
}

console.log(binarySearch([0,1,3,4,5,9], 4))


/* Is Bad Version

1, 2, 3, 4x, 5

- if 4 was bad, then we would call the function to ensure that any batch(number) afterwards is bad to

*/

function solution(isBadVersion) {

    return function(n) {
        let start = 1;
        let end = n;

        while(start <= end) {
            let middle = Math.floor((start+end)/2);
            if(isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }
        return start;
    }
}

function searchInsertPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let middle = Math.floor((start+end)/2);
        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) {
            start = middle + 1;
        } else if(nums[middle] > target) {
            end = middle - 1;
        }
    }
    return start;
}