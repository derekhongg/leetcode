function firstUniqueChar(s) {
    let strObj = {};
    
    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        if(strObj[sChar] === undefined) {
            strObj[sChar] = 1;
        } else {
            strObj[sChar]++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(str[s[i] === 1]) {
            return i;
        }
    }
    return -1;
}