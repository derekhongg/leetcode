/* Palindrome Number */

function isPalindrome(x) {
    if(x < 0) {
        return false;
    }
    let reversedStr = '';
    let xStr = x.toString();
    for (i of xStr) {
        reversedStr = i + reversedStr;
    }
    return reversedStr === xStr
}