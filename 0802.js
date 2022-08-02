/* Stacks */

// Imagine a stack of books, or dishes, First in First Out Method
// functions: push, pop, peek, length

let letters = [] // this is our stack - arrays can be used as stack
let word = "racecar";
let revWord = "";

// put letters of word into stack
for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for(let i = 0; i < word.length; i++) {
    revWord += letters.pop();
};

if(revWord === word) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}

// Create a stack
let Stack = function(){
    this.count = 0;
    this.storage = {};
    // Adds a value onto the end of a stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++
    }
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function() {
        return this.count;
    }
    //returns the value at the end of the stack
    this.peek = function(value) {
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());