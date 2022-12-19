/* Longest Substring Without Repeating Characters */

function lengthOfLongestSubstring(s) {
    // Set up a hash map to store the indices of each character
    const Chars = new Map();

    // Set up variables to track the start and end indices of the current window
    let start = 0;
    let end = 0;

    // Set up a variable to track the maximum length of the substring
    let maxLength = 0;

    // Loop through the input string, one character at a time
    while (end < s.length) {
        // If we haven't seen the current character before, add it to the map
        // and update the end index of the window
        if (!Chars.has(s[end])) {
            Chars.set(s[end], end);
            end++;
        } else {
            // If we have seen the current character before, update the start index
            // of the window to be one character after the last seen instance of
            // this character, and remove the character from the map
            start = Chars.get(s[end]) + 1;
            Chars.delete(s[end]);
        }

        // Update the maximum length if necessary
        maxLength = Math.max(maxLength, end - start);
    }

    // Return the maximum length
    return maxLength;
}

/* Permutation in a String */

function permutation() {

}