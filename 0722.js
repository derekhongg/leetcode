//1. Sorted Squares
//Set up three pointers 
//run while loop because we're unsure when the loop will end
//write conditional where if the value of at beginning index ** 2 is > ending index **2
//we make the new array into that value
//then we will move that pointer down and move the start or end pointer up or down

var sortedSquares = function(nums) {
    let result = []; // empty array to put new numbers in
    let start = 0; //start pointer
    let end = nums.length - 1; //end pointer
    let pointer = end; // new pointer to put new values in
    while (start <= end){ // run while loop because we are unsure when it will end
        if(nums[start] ** 2 > nums[end] ** 2){ // compare the two values in the array
            result[pointer] = nums[start] ** 2; // push into new array when done
            pointer-- //decrease the pointer value down when after new value has been placed
            start++ // move the starter pointer up and compare values again
        } else {
            result[pointer] = nums[end] ** 2; 
            end-- //move the end pointer back one spot and compare values again
            pointer-- 
        }
    }
    return result; // return the results of the new pointer
};

let arr1 = [-4,-1,0,3,10]

// console.log(sortedSquares(arr1))

//Time complexity (O(logn)) - search algorithm Space Complexity = O(n) because we're creating a new data;

let nums = [1,2,3,4];

function runningSum(nums) {
    let arr = new Array(nums.length) // creating new array to put new values in
    arr[0] = nums[0]; // The first values of the two arrays will always be the same and reamain the same
    for(let i = 1; i < nums.length; i++) { // start the index at 1 because index 0 will not need to be touched
        arr[i] = arr[i-1] + nums[i]; // the new value will be the previous value plus the value at the current index
    }
    return arr;
}

//Time Complexity O(logN) - we're creating a new array here Space complexity = O(n) new array is created and passed through

// console.log(runningSum(nums));

// Find Pivot Index

//LeftIndex = 0 - will count the amount of numbers we've seen so far
function pivotIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;
    arr.forEach((e) => {
        totalSum += e
    })
    for(let i = 0; i < arr.length; i++) {
        if(totalSum - leftSum - arr[i] === leftSum) {
            return i
        }
        leftSum += arr[i]
    }
    return -1;
};
// can use reduce function to get total sum
let nums1 = [1,7,3,6,5,6] // sum of this is 28
// total sum
console.log(pivotIndex(nums1))

// Reduce function example

const num = [1, 2, 4, 5];
const sum = num.reduce((a, b) => {
    return a + b;
}, 0);

console.log(sum);