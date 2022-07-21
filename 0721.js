// 1. Count the Number of Consistent Strings
const countConsistentStrings = (allowed, words) => {
	let count = 0; // create counter for valid results

	words.forEach(word => { // iterate through each word
		for (let i = 0; i < word.length; i++) { //iterating through each character
			const char = word[i];
			if (!allowed.includes(char)){ //if allowed word doesn't inlcude the character in the word, break the loop
                break;
            } else if (i === word.length - 1){ //increase the count if the index equals the length of the word
                count++
            } 
		}
	});
	return count;
};

// Space complexity O(n^2): iterating through entire dataset twice

var countConsistent = function(allowed, words) {
    let res = 0;
    allowed = new Set(allowed);
    for(let word of words)
        res += isAllowed(word);
    return res;

    function isAllowed(word){
        for(let c of word)
            if(!allowed.has(c))
                return false
            return true;
    }
        
};
