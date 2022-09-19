/* Middle of Linked List

Two Pointer - Fast & Slow
Run loop while fast pointer still exists
point fast two slots ahead and slow one slot ahead
return slow pointer when fast is done

*/

function findMiddleNode (head) {
    let slowPointer = head;
    let fastPointer = head;
    while(fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    return slowPointer;
}

/* Linked List Cycle 
Use two pointers - Slow and Fast


*/

function detectCycle(head) {
    let fastPointer = head;
    let slowPointer = head;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slow = slow.next;
        
        if(fastPointer === slowPointer) {
            return true;
        }
    }
    return false;
}

/* Linked List Cycle II

Two Pointers - Fast and Slow
Create pointer
Run while loop while fast & fast.next exist
move fast and slow pointers
if fast and slow equal one another break out of the loop
if fast and slow don't equal one another, we want to break out of the loop
then we want to run another while loop while pointer and slow don't equal one another and set it to next;
return slow or pointer at the end

*/

function detectCycle2(head) {
    if(!head.next || !head) {
        return null;
    }
    let fast = head;
    let slow = head;
    let pointer = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) {
            break;
        }
    }
    if(fast !== slow) {
        return null;
    }
    while(pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next
    }
    return slow;
}