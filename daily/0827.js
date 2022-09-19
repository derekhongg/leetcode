/* Valid Parentheses */


function isValidParentheses(s) {
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
}