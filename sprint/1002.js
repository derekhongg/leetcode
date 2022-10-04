/* 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence */


function isPrefixOfWord(sentence, searchWord) {
    let sentenceSplit = sentence.split(" ");
    for(let i = 0; i < sentenceSplit.length; i++) {
        if(sentenceSplit[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
}

/* Move all zeros to the end */


function moveZeroes(arr) {
    // set up nonzeroindx variable
    // run loop starting from the beginning of the array
    // iterating through it, if the number at a certain index is not zero, we'll change it to equal the number ahead of it
    // incredment the nonzero index
    // then run another loop starting at the nonzeroindex and change the rest of the numbers in the array to 0;
    let nonZeroIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    for(let i = nonZeroIndex; i < arr.length; i++){
        arr[i] = 0;
    }
    return arr;
}
let arr1 = [0, 1, 0, 4, 5];

console.log(moveZeroes(arr1))


function moveZeros2(arr) {
    let nonZeroIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            let temp = arr[nonZeroIndex];
            arr[nonZeroIndex] = arr[i];
            arr[i] = temp;
            nonZeroIndex++;
        }
    }

    return arr;
}

console.log(moveZeros2(arr1));

function isIsomorphic(s, t) {
    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++) {
        let sStr = s[i];
        let tStr = t[i];
        if(obj1[sStr] !== obj2[tStr]) {
            return false
        } else {
            obj1[sStr] = i;
            obj2[tStr] = i;
        }
    }
    return true;
}

console.log(isIsomorphic("egg", "add"))

function pivotIndex(nums) {
    let totalSum = 0;
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    for(let j = 0; j < nums.length; j++) {
        if(totalSum-leftSum-nums[j] === leftSum) {
            return j;
        }
        leftSum += nums[j];
    }
    return -1;
} 

let arr2 = [1,7,3,6,5,6];

console.log(pivotIndex(arr2))