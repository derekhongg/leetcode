// 1. Palindrome Number
// Questions to ask
// 1. Will this contain only numbers 2. Can the numbers be negative? 3. Will there be any null values? 4. Will all the numbers be integers?
function isPalidromeNumber(x) {
    let reversedXStr = ""; // create an empty string to add to later
    let xString = x.toString();
    for (let i of xString) { // create for loop to interate through every string in xStr
        reversedXStr = i + reversedXStr; // add the string to index where it's looping through
    }
    return reversedXStr === xString; // hard comparison between reversedXTR and xStr - it will return either true or false at the end;
}

// 2. Merge Two Sorted Linked Lists
// Questions to Ask
// 1. Could the link list be null 2. Are there possibilites of having duplicates in these Linked Lists? 3. Any possible min/max values 4. Negative values 5. Only integers
// 6. Can we assume this list is always assorted in asscending order?

//Create a dummy node - we want to use this when there's  addition or subtraction to a Linked List
// create prev variable and set it to dummy and we will adjust it as we go
//Other possible solutions - Recursion 

function mergeTwoSortedLinkedLists(list1, list2) {
    const dummy = new ListNode();
    let prev = dummy;
    while (list1 !== null && list2 !== null) { // run the while loop while list1 and list2 exist
        if (list1.val <= list2.val) { // if we have list1 less than list2 
            prev.next = list1; //we want to move the previous pointer to list1
            prev = list1; // set the pointer to list1
            list1 = list1.next; // then increment list1 by 1
        } else {
            prev.next = list2; // do the opposite of that for list two if the conditional doesn't meet criteria
            prev = list2;
            list2 = list2.next
        }
    }
    if (!list1) {
        prev.next = list2;
    }
    if (!list2) {
        prev.next = list1;
    }
    return dummy.next
}

//recursion
function mergeTwoSortedLinkedLists2(list1, list2) {
    if(list1 === null) {
        return list2;
    }
    if(list2 === null) {
        return list1; 
    }
    if(list1.val < list2.val) {
        list1.next = mergeTwoSortedLinkedLists2(list1.next, list2);
        return list1
    } else {
        list2.next = mergeTwoSortedLinkedLists2(list1, list2.next);
        return list2
    }
}


// 3. Reverse Linked list
// Questions to ask
// 1. Will the list always be sorted? 2. Any negative values 3. Will all the values in the list be integers? Any possibility of duplicates? Min/max values?
//set prev pointer to null, this will be updated and returned at the end
// run while loop while head exists
// set the pointer to head
// set the head to head.next;
// return prev

function reverseLinkedList(head) {
    let prev = null; // set prev pointer to move
    while (head !== null) { // run a while loop while head exists
        let temp = head.next; // create temp and set to head.next
        head.next = prev; // set head.next to prev - null
        prev = head; // move prev = head;
        head = temp; // set head to temp
    }
    return prev; // return prev;
}

// 4. Reverse String
// Questions to ask: 1. Will this problem only include numbers 2. Will there be any null values? 3. If there are numbers, are there negative values?
// 4. Is it possible for this array to be empty? 5. do we want to return an array or a string?

// start by creating two pointers, start and end
// run a while loop through the array and switch the poisition of each string and increment start by 1 and decrement end by 1
// return s at the end

function reverseString(s) {
    let start = 0; // create the pointer for start and end 
    let end = s.length - 1; // this pointer will be at the end of the array
    while (start <= end) { // run the while loop through the entire array
        [s[start], s[end]] = [s[end], s[start]] // swap the positions of each character in the position 
        start++; // increment start to move the pointer right
        end--; // decrement end to move the pointer left
    }
    return s // return the find product
}

// 5. Insert Position 
// find index of where value needs to be inserted in a sorted array 
// Questions: 1. Will this array always be sorted 2. Are negative numbers possible in the array 3. Will they always be integers
//4. Will min max values play a role in this? 5. Will there always be a return value

// will create start and end pointers to adjust as we loop through the entire array
// create a middle pointer as the return value and will adjust as we loop through the indexes
// return start at the end if no conditionals are met

function findInsertIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start++
        } else if (nums[middle] > target) {
            end--
        }
    }
    return start;
}

// 6. Contains Duplicates
// create new set since it only contains unique values and compare it to the arr size
// if the set size < arr size, returns true, otherwise it will return false

function doesArrContainDuplicate(arr) {
    return new Set(arr).size < arr.length;
}

// 7. Get intersection of Linked List
// continue to move headA and headB until they intersect with two pointers
// while the pointers don't equal one another, we want to move the pointers to the next node until they intersect
// when the pointers intersect we can return either of the pointers;
// if the pointers are null, then we can just return of of the nodes
// i can return either pointer 1 or pointer two at the end


let getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) { // if either of the heads are null then we will just return null
        return null;
    }
    let pointer1 = headA; // set first pointer at first Linked List
    let pointer2 = headB; // set second pointer at the second head;

    while (pointer1 !== pointer2) { // while pointer1 and pointer2 don't equal one another
        pointer1 = pointer1.next; // we keep pushing the pointer1
        pointer2 = pointer2.next; // we will keep pushing pointer2
        if (pointer1 === pointer2) { // if pointer1 and pointer2 intersect, we can return one of the pointers 
            return pointer1
        };
        if (pointer1 === null) {
            pointer1 = headB; // if pointer one reaches an end, we can push it to the second Linked List
        };
        if (pointer2 === null) { // if pointer two reaches an end, we can move it to the first linked list and continue;
            pointer2 = headA
        };
    }
    return pointer1; // we can return either pointer 
};

//8. TwoSum
// run loops to iterate through the array twice, return indexes from first and second loop to give answer
// second loop will start 1 spot ahead of where first loop starts

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
//create hashmap to store values
// create complement variable to store values and check if we've seen that key-value pair
function twoSum2(arr, target) {
    let hashMap = {};
    for(let i = 0; i < arr.length; i++) { // this will loop through the entire array once
        let complementValue = target - arr[i];
        if(hashMap[complementValue] !== undefined) {
            return [hashMap[arr], i];
        } else {
            hashMap[arr[i]] = i
        }
    }
}