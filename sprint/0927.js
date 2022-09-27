/* Merge Two Sorted Linked List

Time Complexity:
Space Complexity: 

*/


/* Remove Element from Array

Ex: [1, 2, 3, 4] Target = 3 | Return [1, 2, 4]


*/


/* Isomorphic String - Review*/

function isIsomorphic(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
        if(obj1[sChar]!==obj2[tChar]) {
            return false
        } else {
            obj1[sChar] = i;
            obj2[tChar] = i;
        }
    }
    return true;
}

function removeElement(nums, target) {
    if(target === undefined) {
        return nums;
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            nums.splice(i, 1);
        }
    }
    return nums;
}

let arr2 = [1,2,3,4];

console.log(removeElement(arr2, 2))