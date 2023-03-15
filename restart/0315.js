/* Find the Index of the First Occurrence in a String */

var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) {
        return -1;
    }
    
    if(needle === '' || haystack === needle) {
        return 0;
    }

    for(let i = 0; i < haystack.length - needle.length; i++) {
        let str = "";
        for(let j = i; j < i+needle.length; j++) {
            str += haystack[j];
        }
        if(str === needle) {
            return i;
        }
    }
    return -1;
}