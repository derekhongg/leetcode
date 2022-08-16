/* N-ary Tree Preorder Traversal

- Create Stack and Result array
- Push into stack
- while Stack exists remove from stack and push into result array
run loop and push nodes into stack and return the result

*/

function preorderTree(root) {
    let stack = [];
    let result = [];
    if(!root) {
        return result;
    }
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
        for(let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
}