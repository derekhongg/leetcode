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