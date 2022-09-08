const arr = [
    ["first", "row"],
    ["and", "second", "row"],
    ["and", "the", "third", "row"]
];

// Calculate how many letters does arr have in total

// for loop to iterate through each array
// have a counter
// as it loops through each array and string, increment the counter by 1

function letterCounter(s) {
    let oneD = s.flat()
    let count = 0;
    for(let i = 0; i < oneD.length; i++) {
        count+=oneD[i].length
    }
    return count
}

console.log(letterCounter(arr))