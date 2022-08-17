/* Longest Palindrome

- Create new set
- Loop through string and test set

*/ 

function longestPalindrome (s) {
    const set = new Set();
    let count = 0; // this will be returned at the end

    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) { // if set has character
            count += 2; // increase the count and delete it from the set
            set.delete(s[i]);
        } else {
            set.add(s[i]); // if not, just add the string to set
        }
    }
    if(set.size > 0) { // if the set size is greater than 0 increase the count by 1 and return at end
        count++
    }
    return count;
}