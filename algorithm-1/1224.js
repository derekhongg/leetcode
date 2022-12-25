/* First Unique Character in a String */

var firstUniqChar = function(s) {
    let strObj = {}; // Set Up Object for String
    for(let i = 0; i < s.length; i++) {
        let sChar = s[i]
        if(strObj[sChar] == undefined) { // if character is not undefined set the count to one
            strObj[sChar] = 1;
        } else {
            strObj[sChar]++ // else increment the count of the character
        }  
    }
    for(let i = 0; i < s.length; i++) {
        if(strObj[s[i]] === 1) { // return the unique character
            return i
        }
    }
    return -1
}


/* Ransome Note */

var canConstruct = function(ransomNote, magazine) {
    const hashMapOfLetters = {};
    for(let i of magazine) {
        if(!hashMapOfLetters[i]) {
            hashMapOfLetters[i] = 0; 
        }
        hashMapOfLetters[i]++;
    }
    for(let j of ransomNote) {
        if(!hashMapOfLetters[j]) {
            return false;
        }
        hashMapOfLetters[j]--;
    }
    return true;
};

/* Valid Anagram */

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const sHashMap = {};
    const tHashMap = {};
    for(let i = 0; i < s.length; i++) {
        if(!sHashMap[s[i]]) {
            sHashMap[s[i]] = 0
        }
        if(!tHashMap[t[i]]) {
            tHashMap[t[i]] = 0;
        }
        sHashMap[s[i]]++
        tHashMap[t[i]]++
    }
    for (let ch in sHashMap) {
        if(sHashMap[ch] !== tHashMap[ch]){
            return false
        }
    }
    return true;
};