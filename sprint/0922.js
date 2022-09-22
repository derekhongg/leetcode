/* Find Pivot Index

- Set up total sum variable
- set up leftSum variable to test and return values
- Subtract total sum from (leftSum & value at arr) and compare it to the leftSum
- return -1 if no values exist

Time Complexity: O(n+m)
Space Complexity: O(1)

*/

function findPivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for(let j = 0; j < nums.length; j++) {
        if(totalSum - leftSum - nums[j] === leftSum) {
            return true;
        }
        leftSum += nums[j];
    }
    return -1;
}

/* Search Insert Position

Binary Search

- Set up start and end pointers
- Set up middle pointer within a for loop
- Move pointers back and forth if index of arr[middle] doesn't equal target
- return start

Time complexity: O(log n)
Space Complexity: O(1)
*/

function searchInsert(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    for(let i = 0; i < arr.length; i++) {
        let middle = Math.floor((start+end)/2);
        if(arr[middle] === target) {
            return middle;
        } else if(arr[middle] < target) {
            start++;
        } else if(arr[middle] > target) {
            end--;
        }
    }
    return start;
}

/* Linked List Cycle

- Set fast & slow pointer
- Run while loop
- Move slow pointer one spot, move fast pointer two spots
- if fast and slow ever equal one another, return true, otherwise return false

Time Complexity: O(n)
Space Complexity: O(1)
*/

function hasCycle(head) {
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
}

/* Fibonacci Number

Recursive Solution:

- Time Complexity: O(n)
- Space Complexity: O(n)

Iterative Solution:

- Time Complexity: O(n)
- Space Complexity:n O(1)

*/

function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2)
}

console.log("Recursive: " +fib(8))

function fib2(n) {
    if(n < 2) {
        return n
    }
    let num1 = 0;
    let num2 = 1;
    for(let i = 2; i <= n; i++) {
        let curr = num1 + num2;
        num1 = num2
        num2 = curr;
    }
    return num2
}

console.log("Iterative: " + fib2(4))