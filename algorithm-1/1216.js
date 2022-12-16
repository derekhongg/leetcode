/* Middle of Linked List */


function middleLinkedList(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/* Remove Nth Node From List */

function removeNthNode(head, n) {
    let dummy = new ListNode(null);
    dummy.next = head;
    let resultHead = dummy;
    let count = 0;
    let tail = head;

    while(count < n) {
        count++;
        tail = tail.next;
    }

    let removeNode = head;
    let prev = dummy;

    while(tail) {
        tail = tail.next;
        removeNode = removeNode.next;
        prev = prev.next;
    }

    prev.next = removeNode.next;
    return resultHead.next;
}