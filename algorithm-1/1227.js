/* Reverse Linked List */

var reverseLinkedList = function (head) {
    let pointer = null;

    while(head !== null) {
        let next = head.next;
        head.next = pointer;
        pointer = head;
        next = head.next;
    }
    return pointer.next;
}

/* Remove Duplicate from Linked List */

var removeDup = function(head) {
    let currNode = head;

    while(currNode && currNode.next) {
        if(currNode.val === currNode.next.val) {
            currNode.next = currNode.next.next;
        } else {
            currNode = currNode.next;
        }
    }
    return head;
}