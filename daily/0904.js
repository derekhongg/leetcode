/* 429. N-ary Tree Level Order Traversal 

- Use a queue
- While there is something working in the loop, we want it to do something

*/


function levelOrder(root) {
    if(!root) {
        return [];
    }
    const queue = [root];
    const result = [];

    while(queue.length) {
        let qLen = queue.length;
        result.push(queue.map(node => node.val));

        while(qLen--) {
            let node = queue.shift();

            for(let child of node.children) {
                queue.push(child)
            }
        }
    }
    return result;
}

/*

Time Complexity: O(N) - Because we only touch each node once
Space Complexity: O(N) - not creating anything

*/

