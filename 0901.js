var isMonotonic = function (A) {

    let increasing = 1
    let decreasing = 0

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > A[i + 1]) {
            increasing = 1
        }
        if (A[i] < A[i + 1]) {
            decreasing = false
        }

    }

    return increasing || decreasing
};




function solution(arr) {
    let arrResults = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2] || arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2])) {
            arrResults[i] - 1;
        } else {
            arrResults[i] = 0;
        }
    }
    return arrResults
}



function solution2(source) {
    /* 
    input: string
    output: find longest continuous string
    */

    let currentChar = source.charAt(0);
    let maxCharacter = source.charAt(0);
    let numOfCharacters = 1;
    let maxNumOfCharacters = 1;

    for (let i = 1; i < source.length; i++) {
        if (source.charAt(0) === currentChar) {
            numOfCharacters++
        } else {
            currentChar = source.charAt(i);
            maxNumOfCharacters = 1;
        }
        if (numOfCharacters > maxNumOfCharacters) {
            maxNumOfCharacters = numOfCharacters;
            maxCharacter = currentChar;
        }
    }
    return `${maxCharacter}${maxNumOfCharacters}`;
}

function Substring(s) {
    var ans = 1, temp = 1;

    // Traverse the string
    for (var i = 1; i < s.length; i++) {
        // If character is same as
        // previous increment temp value
        if (s[i] == s[i - 1]) {
            temp++;
        }
        else {
            ans = Math.max(ans, temp);
            temp = 1;
        }
    }
    ans = Math.max(ans, temp);

    // Return the required answer
    return ans;
}

console.log(Substring("abcdddddeff"));


function solution3(priceList, logs) {
    const revenue = 0;
    let items = {};
    for(let i = 0; i < priceList.length; i++) {
        const itemArray = priceList[i].split(" ");
        const itemName = itemArray[0].Substring(0, itemArray[0].length - 1);
        const price = itemArray[1];
        items[itemName] = price;
    }
    for(let i = 0; i < logs.length; i++) {
        const log = logs[i].split(" ");
        if(log[0] === 'sell') {
            const logName = log[1].Substring(0, log[0].length - 1);
            const itemNumber = log[2];
            const subTotal = itemNumber * items[logName];
            revenue = revenue + subTotal;
        }
        if(log[0] === 'discount_start'){
            const discount = log[2]
            const logName = log[1].subString(0, log[0].length-1);
            const newPrice = items[logName] * (100 - discount / 100)
            items[logName] = newPrice
        }
    }
}


function solution4(objects, radius) {
    // input array of objects that are on a number line
    // assign range to be a min object and radius fice versa
    // return index where most number of objects are covered
    const minRange = objects[0] - radius;
    const maxRange = objects[objects.length - 1] + radius;
    let maxNumOfObjectsCovered = 0;
    let indexOfMaxCovereage = 0;
    for(let i = minRange; i <= maxRange; i++) {
        let numOfObjectsCovered = 0;
        for(let j = 0; j < objects.length; j++) {
            if(objects[j] <= i + radius && objects[j] >= i - radius) {
                numOfObjectsCovered++
            }
            if(numOfObjectsCovered > maxNumOfObjectsCovered) {
                maxNumOfObjectsCovered = numOfObjectsCovered;
                indexOfMaxCovereage = i;
            }
        }
    }
    return indexOfMaxCovereage;
}