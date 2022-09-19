// 1. Palindrome Number

function isPalindrome(x) {
    let reversedStr = ''; //declare variable for reversed string
    let xStr = x.toString(); // convert x to String
    for (i of xStr) { // loop through xStr
        reversedStr = i + reversedStr; // 
    }
    return reversedStr === xStr;
}

console.log(isPalindrome(121));

// 2. Search Insert Position 

// Using binary Search

function insertHere (nums, target) {
    let start = 0; //create two pointers
    let end = nums.length - 1;
    while(start <= end) {
        let middle = Math.floor((start + end)/2); //set middle pointer to move 
        if(nums[middle] === target) {
            return middle;
        } else if(nums[middle] < target) { // 
            start+=1
        } else {
            end-=1
        }
    }
    return start;
}

// Reverse Linked List

function reverseLinked(head) {
    let prev = null;
    while(head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}

// Middle of linked list
// create fast and slow pointer, return slow pointer at the end when done

function middleNode(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}