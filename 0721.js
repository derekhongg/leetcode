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

// 2. Reverse String
let newString = ["h","e","l","l","o"]

let reverseString2 = function(s) {
    let left = 0; // create two pointers
    let right = s.length - 1; // one for start and end
    while(left <= right) { // run a while loop because we don't know when this string will end
        [s[left], s[right]] = [s[right], s[left]]; //flip the two values from the two pointers;
        left++; // increase the beginning as we go forward
        right--; // decrease the second pointer as we move forward
    }
    return s // return the string at the end
}

// Time Complexity: O(n) Space complexity: O(1)

//console.log(reverseString2(newString));

// 3. Binary Search

let binarySearch = function (nums, target) {
    let start = 0; // create two pointer
    let end = nums.length - 1;
    while (start <= end) {
        let middle = Math.floor((start+end)/2) //find middle
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) { //move pointer if needed
            start += 1
        } else {
            end -= 1
        }
    }
    return -1;
}

//Space complexity O(logn): a search algorithm, logarithmic runtime 

// 4. Merge Sorted Array
// Two pointer

let arr1 = [1,2,3,0,0,0]
let arr2 = [2,5,6]

let merge = function (nums1, m, nums2, n) {
    let first = m - 1; 
    let second = n - 1;
    let i = m + n - 1; // i will be set at the end of the first array
    while(second >= 0) { // we want the loop to run as long as the second array exists
        let firstVal = nums1[first];
        let secondVal = nums2[second];
        if(firstVal > secondVal) { // this will sort the first array 
            nums1[i] = firstVal;
            i--;
            first--;
        } else { // this will sort the second array  if it is greater than the value in nums1
            nums1[i] = secondVal;
            i--;
            second--;
        }
    }
} 
// Runtime is O(n) but space complexity is O(1) since no new variables are being made

