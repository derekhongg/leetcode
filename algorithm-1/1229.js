/* Binary Tree Postorder Traversal */

var postorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    let stack = [root];
    let result = [];
    while (stack.length) {
        let node = stack[stack.length - 1]; // taking the last node value out of the stack
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        } else if (node.right) {
            stack.push(node.right);
            node.right = null;
        } else {
            result.push(stack.pop().val);
        }
    }
    return result;
}

/* Binary Tree Preorder Traversal */

var preorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    const stack = [root];
    let result = [];
    while(stack.length) {
        var node = stack.pop();
        result.push(node.val);
        if(node.right) {
            stack.push(node.right)
        }
        if(node.left) {
            stack.push(node.left)
        }
    }
    return result
}

/* Binary Tree Inorder Traversal */

var inorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    var stack = [];
    var result = [];
    while(root||stack.length) {
        if(root) {
            stack.push(root);
            root = root.left;

        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    return result;
}