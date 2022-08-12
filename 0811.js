/* Container with the most water 

You are given an int array height of n
Find the two lines that together with the x-axis that form a container
Return the maximum amount of water a container can store
Two pointer?
*/

function maxArea(height) {
    let areaOfContainer = 0; // create variable for the total area of the container
    let leftPointer = 0; // Create two pointers at the start and end of the array
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) { // Loop through before before left pointer hits the right pointer
        const temp = (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer]); //
        areaOfContainer = Math.max(areaOfContainer, temp);
        if (height[leftPointer] > height[rightPointer]) {
            rightPointer -= 1;
        } else {
            leftPointer += 1;
        }
    }
    return areaOfContainer;
}
// O(1) - Because we create no new variables, O(n) - because we only loop through it once

/* Backspace String Compare

Example: "ab#c" - "ad#c" - return true because they both become "ac";
"ab##" - "c#d#" return true because they both become empty
"a#c" - "b" return false

Can use stack

*/

function backspaceCompare(s, t) {
    function parse(string) { // create helper function to break strings apart
        let stack = []; // create empty stack to add elements into
        for (let i = 0; i < string.length; i++) { // loop through the entire array
            if(string[i] == "#") { // if certain element is equal to # we get rid of it
                stack.pop()
            } else {
                stack.push(string[i]); // otherwise we add to the stack
            }
        }
        return stack.join("") // join the stacks together after loop is done
    }
    return parse(s) === parse(t); // compare s and t
}

// Time Complexity: O(N + M)    Space Complexity: O(n)
