/* Linked List Cycle */


var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;
}

/* Merge Two Sorted Lists */

var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(null);
    let pointer = newList;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            pointer.next = list1;
            pointer = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            pointer = list2;
            list2 = list2.next;
        }
    }
    if(!list2) {
        pointer.next = list1;
    }
    if(!list1) {
        pointer.next = list2;
    }
    return newList.next;
}

/* Remove Linked List Elements */

var removeElements = function(head, val) {
    if(!head) {
        return head;
    }

    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }

    let currPointer = head;

    while(currPointer && currPointer.next) {
        if(currPointer.next.val === val) {
            currPointer.next = currPointer.next.next;
        } else {
            currPointer = currPointer.next;
        }
    }
    return head;
}