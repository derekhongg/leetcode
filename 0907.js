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
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < s[i].length; j++) {
            count++
        }
    }
    return count
}

console.log(letterCounter(arr))