/* Queues
Imagine standing in line
First in Last Out - Can use Queue using an array
*/

function Queue() {
    let collection = [];
    this.print = function () {
        console.log(collection);
    }
    // Adds to a queue
    this.enqueue = function (element) {
        collection.push(element);
    }
    // removes from a queue
    this.dequeue = function () {
        return collection.shift();
    }
    // return the front of the queue
    this.front = function () {
        return collection[0];
    }
    //return the size of the queue
    this.size = function () {
        return collection.length
    }
    // check if queue is empty
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

function PriorityQueue() {
    let collection = [];
    this.printCollection = function () {
        console.log(collection);
    };
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { // checking priorities 
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    }
    this.dequeue = function () {
        let value = collection.shift();
        return value[0];
    }
    this.front = function () {
        return collection[0];
    }
    //return the size of the queue
    this.size = function () {
        return collection.length
    }
    // check if queue is empty
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

let pq = new PriorityQueue();
pq.enqueue(['Derek Hong', 3]);
pq.enqueue(['Takara Truong', 1]);
pq.enqueue(['Peter Mach', 2]);
pq.enqueue(['James Lee', 2]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

/* Binary Search Tree */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
}