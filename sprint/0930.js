/* Reverse String - Newer problem */


function reverseString(str) {
    let strSplit = str.split('');
    let start = 0;
    let end = strSplit.length - 1;

    while(start <= end) {
        [strSplit[start], strSplit[end]] = [strSplit[end], strSplit[start]];
        start++;
        end--;
    }
    return strSplit.join('')
}

console.log(reverseString("derek hong"))


/* Single Number

Time Complexity: O(2n);
Space Complexity: O(n);

*/

function singleNumber(nums) {
    let set = new Set();

    for(let i of nums) {
        if(set.has(i)) {
            set.delete(i);
        } else{
            set.add(i);
        }
    }
    for(let j of set) {
        return [...set];
    }
}

console.log(singleNumber([1,2,1,2,4,5,6]))