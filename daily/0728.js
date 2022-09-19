// 1. Remove Duplicates from Sorted List
// set current variable to head
// run a while loop since we don't know when the linked list will end
// if the current.val and current.next equals to one another, delete it
// else continue it
// return the head;

function deleteDuplicatesinLinkedList(head) {
    let current = head;
    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head; 
}