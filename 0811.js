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