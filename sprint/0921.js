/* Palindrome Number

First Solution (Convert to string)
- convert to string
- create reversed string variable and add to it
- compare two values

Time Complexity:
Space Complexity:


Second solution (Create new number value)

Time Complexity: O(n)
Space Complexity: O(1)
*/

function isPalindrome(x) {
    if(x<0) {
        return false;
    }

    let reversedStr = '';
    let xStr = x.toString();
    for(let i of xStr) {
        reversedStr = i + reversedStr
    }
    return reversedStr === xStr
}

console.log(isPalindrome(121));

function isPalindrome2(x) {
    if(x < 0) {
        return false;
    }

    let reversedNum = 0;
    for(let i = x; i>=1; i=Math.floor(i/10)) {
        reversedNum = (reversedNum*10) + (i%10);
    }
    return reversedNum === x;
}

console.log(1%10);