/* Valid Parentheses */

var isValid = function(s) {
    let bracket = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    let heap = [];
    for (let i of s) {
        if(bracket[i]) {
            heap.push(bracket[i]);
        } else {
            if(heap.pop() !== i) {
                return false;
            }
        }
    }
    return !heap.length
};


/* Implement Queue Using Stacks */

class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }
    push(val) {
        this.pushStack.push(val);
    }
    pop() {
        if (this.popStack.length === 0) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop();
    }
    peek() {
        if (this.popStack.length === 0) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]
    }
    empty() {
        return !this.pushStack.length && !this.popStack.length
    }
}