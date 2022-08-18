/* Binary Tree Level Order Traversal */

function levelOrder(root) {
    if(!root) {
        return [];
    }
    const queue = [root];
    const result = [];

    while(queue.length) {
        let qLength = queue.length;
        result.push(queue.map(node => node.val));
        while(qLength--) {
            let node = queue.shift();
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
}

// Time Complexity: O(n)    Space Complexity: O(n)