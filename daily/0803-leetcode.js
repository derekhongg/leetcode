/* Leetcode */

/*
Isomorphic Strings 
- Takes in two parameters - s & t
- A string is isomorphic is if s can be replaced to get t 
*/

let isIsomorphic = function (s, t) {
    let obj1 = {};
    let obj2 = {};
    if(s.length !== t.length) {
        return false;
    }
    for(let i = 0; i < s.length; i++) {
        if(obj1[s[i]] !== obj2[t[i]]) {
            return false;
        } else {
            obj1[s[i]] = i;
            obj2[t[i]] = i;
        }
    }
    return true;
}

/*
Is Subsequence
- Given two strings, s & t, return true if s is a subsequence of t
- return false otherwhise

s = "abc"
t = "ahbgdc" output: true

s = "axc" t= "ahbgdc" output = false

*/

function isSubsequence(s, t) {
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer1 < s.length && pointer2 < t.length) {
        if(s[p1] === t[p2]) {
            pointer1++
            pointer2++
        } else {
            pointer2++
        }
    }
    return pointer1 === s.length
}

/* Longest Palindrome
Given a string that consists of lowercase or uppercase letters. Find the length of the longest palindromes that can be build with those letters
Aa - would be considered a palindrome

*/