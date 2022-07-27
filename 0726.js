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

//2. Contains Duplicate
// Questions: will there always be a duplicate? will there be negative values? will there be min/max values involved? will there be ever be an null values?
//could create new set since it only contains duplicate values and compare it to the parameter length
//could create new HashMap and loop through the map and check if any values in the hashmap exist;
function containsDuplicate(nums) {
    const testSet = new Set(nums);
    return testSet.size !== nums.length;
}

function containsDuplicate2(nums) {
    let numsHashMap = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in numsHashMap) {
            return true;
        }
        numsHashMap[nums[i]] = 0;
    }
    return false;
}

//3. Insert position
// Will there be negative numbers involved? are all the numbers all integers? is the array already sorted? will there be any null values in the array?
// create two pointers at start and end of array, and a middle pointer to move around 

function searchInsertPosition (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let middle = Math.floor((start+end)/2)
        if(arr[middle] === target) {
            return middle;
        } else if(arr[middle] < target) {
            start++
        } else if(arr[middle] > target) {
            end--
        }
    }
    return start;
}

//4. Fibonacci Number
// Questions: Are negatives possible? will there every be null values? will we always be putting in integers and returning an integer? // will we ever get a null value?
// recursive = we'll always add the number before it and the one before that one
// unless the value is either 1 or 2

function fib(num) {
    if(num === 1 || num === 2) {
        return 1
    }
    if(num === 0) {
        return 0
    }
    return fib(num-1) + fib(num-2);
}

function fib2(num) {
    if(num < 2) { //if the number is less than 2 we will just return the number inserted into this if statement
        return num;
    }
    let current = 0; // we set this to be the value to be changed to get the fibonacci number
    let a = 0; // this will start at the very first index
    let b = 1; // we will move this because will be the sequence number
    for(let i = 2; i <= num; i++) { // iterate through the number, start at 2 since any number lower than that will just return itself
        current = a + b; // we will add the values of a and b together as we loop through
        a = b; // move a to equal 
        b = current
    }
    return current;
}

function fib3(num) {
    if(num < 2) { // we know that any number less than two will return itself 
        return num;
    }
    const fib = [0, 1]; // we know the first two numbers of the sequence are zero and 1
    for(let i = 2; i <= num; i++){ // start the loop at 2 
        fib[i] = fib[i-1] + fib[i-2]; // update the value in the array
    }
    return fib[fib.length-1]; // return the last value in the array
}

console.log(fib3(5))

//5. Reverse String - Multiple solutions
// swap positions with pointers
function reverseString(str) {
    let start = 0;
    let end = str.length-1;
    while(start < end) {
        [str[start], str[end]] = [str[start], str[end]];
        start++;
        end--;
    }
    return str
}


// use recursion to swap positions


