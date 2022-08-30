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

function isSubsequence(s, t) {
    let p1 = 0;
    let p2 = 0;
    while(p1 < s.length && p2 < t.length) {
        if(s[p1] === t[p2]) {
            p1++
            p2++
        } else {
            p2++
        }
    }
    return p1 === s.length;
}