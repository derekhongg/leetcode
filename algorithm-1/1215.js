/* Reverse String

['h', 'e', 'l', 'l', 'o'] => ['o', 'l', 'l', 'e', 'h']

*/

function reverseString(str) {
    let start = 0; 
    let end = str.length - 1;

    while(start <= end) {
        [str[start], str[end]] = [str[end], str[start]];
        start++;
        end--;
    }
    return str;
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

function reverseStringIII(str) {
    let result = '';
    let word = '';

    for(let char of str) {
        if(char === ' ') {
            result += word + char;
            word = '';
        } else {
            word = char + word;
        }
    }
    return result + word;
}

console.log(reverseStringIII("Let's take a LeetCode Contest"))