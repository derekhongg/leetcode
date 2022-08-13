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