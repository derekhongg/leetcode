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

/* Maximum Depth of Binary Tree */

var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    
    let depth = 0

    let BFS = (node, level) => {
        if(node===null) {
            return 0
        }
        if(level > depth) {
            depth = level;
        };
        BFS(node.left, level+1);
        BFS(node.right, level+1);
    }
    BFS(root, 1);
    return depth
};

/* Symmetric Tree */

var isSymmetric = function(root) {
    let result = true;

    function helper(node1, node2) {
        if(!node1 && !node2) {
            return;
        }
        if(!node1 || !node2 || node1.val !== node2.val) {
            result = false;
            return;
        }
        helper(node1.left, node2.right);
        helper(node1.right, node2.left);
    }
    helper(root, root);
    return result;
};