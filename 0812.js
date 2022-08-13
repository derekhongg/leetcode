/* Decode String

Example: s = "3[a]2[bc]" output = "aaabcbc"
Input: s = "3[a2[c]]" Output: "accaccacc"

k = how many times we need to repeat it
[ = Start storing what I want to repeat
] = Start repeating after this closing bracket

*/

// example : 31[a2[c]]

function decodeString(s) {
    let multiply = [];
    let repeatStr = [];
    let solution = "";
    let tempMult = "";
    for(let i of s) {
        if(!isNaN(i)) {
            tempMult =  `${tempMult}${i}` //31
        } else if (i === '[') {
            multiply.push(tempMult); // [31]
            tempMult = "";
            repeatStr.push(solution); // [""]
            solution = "";
        } else if (i === ']') {
            solution = repeatStr.pop() + solution.repeat(multiply.pop())// acc
        } else {
            solution += i; // "" + a
        }
    }
    return solution;
}

// Time complexity: O(n)  Space Complexity: O(n)
