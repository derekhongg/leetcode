/* Reverse String 

- create two pointers
- swap the pointers at certain positions and increment/decrement when swap is completed
- return the string at the end

Time Complexity: O(N) - loop through once
Space Complexity: O(1) - Didn't create any new variables

*/

function reverseString(str){
    let start = 0; 
    let end = str.length - 1;

    while(start <= end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++
        end--
    }
    return str;
}

let s = ["h","e","l","l","o"];

console.log(reverseString(s));