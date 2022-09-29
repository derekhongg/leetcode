/* Merge Two Sorted Linked List

Time Complexity:
Space Complexity: 

*/


function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(null);
    const prev = dummy;

    while (list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    if(!list1) {
        prev.next = list2;
    }
    if(!list2) {
        prev.next = list1;
    }
    return dummy.next;
}

/* Remove Element from Array

Ex: [1, 2, 3, 4] Target = 3 | Return [1, 2, 4]


*/


/* Isomorphic String - Review

Time Complexity: O(n)
Space Complexity: O(n)

*/

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