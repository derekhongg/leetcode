/* Stacks */

// Imagine a stack of books, or dishes, First in First Out Method
// functions: push, pop, peek, length

let letters = [] // this is our stack - arrays can be used as stack
let word = "racecar";
let revWord = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    revWord += letters.pop();
};

if (revWord === word) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}

// Create a stack
let Stack = function () {
    this.count = 0;
    this.storage = {};
    // Adds a value onto the end of a stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++
    }
    // Removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function () {
        return this.count;
    }
    //returns the value at the end of the stack
    this.peek = function (value) {
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

// Set

function mySet() {
    let collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }
    // this method will return all the values in the set;
    this.values = function () {
        return collection;
    }
    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) { // if the stack doesn't have an the element we want to push
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set;
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }
    //this method will return the size of the collection 
    this.size = function () {
        return collection.length;
    }
    // this method will return the union of the two sets
    this.union = function (otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        })
        secondSet.forEach(function (e) {
            unionSet.add(e);
        })
        return unionSet;
    }
    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    //this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }
    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        })
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());