// Sets

const mySet = new Set();

// Add value

mySet.add(60);
mySet.add(21);
mySet.add(56);
mySet.add({
    name: 'Derek',
    age: 24
});
mySet.add('dcode');
mySet.add(67.98);

console.log(mySet.size);




// 1. Unique Email Addresses

var numUniqueEmails = function(emails) {
    const set = new Set(); // Using set because they can only hold unique values

    for(e of emails) {
        const arr = e.split("@"); // split the local and domain values
        console.log(arr, "checkpoint0")
        arr[0] = (arr[0].split("+"))[0];
        arr[0] = arr[0].replace(/\./g, ""); // replace all the dots globally
        console.log(arr[0]);
        set.add(arr.join("@"));
    }
    console.log(set)
    return set.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(emails))
// set local name
// a.bc + de.fg+jk // ignore everything afer first +
// a.bc => replace dots with empty string "" - abc
//domain name
//join local and domain name and add to the set

// 2. Reverse Linked List

function reverseLinkedList (head) {
    let prev = null; // this will be the new tail
    let next = null; //
    while(head !== null) { // since we don't know when this will end, we will run the while loop while it exists
        next = head.next; // we need to store a reference of what was the next node before severing it
        head.next = prev; // severing the ties of the first value of 5 with next value to equal value of null
        prev = head; // assigning it to what the previous head node was;
        head = next;
    }
    return prev; // previous becomes the last node or new head;
}

// Space complexity: O(n), no new infomation was added, will iterate through the information we have;