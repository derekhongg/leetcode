// Sets

const mySet = new Set();

// Add value

mySet.add(60);
mySet.add(21);
mySet.add(56);
mySet.add({
    name: 'Derek',
    age: 24
});
mySet.add('dcode');
mySet.add(67.98);

console.log(mySet.size);




// 1. Unique Email Addresses

var numUniqueEmails = function(emails) {
    const set = new Set();

    for(e of emails) {
        const arr = e.split("@");
        console.log(arr, "checkpoint0")
        arr[0] = (arr[0].split("+"))[0];
        console.log((arr[0].split("+"))[0], "checkpoint1");
        arr[0] = arr[0].replace(/\./g, "");
        set.add(arr.join("@"));
    }
    return set.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

console.log(numUniqueEmails(emails))
// set local name
// a.bc + de.fg+jk // ignore everything afer first +
// a.bc => replace dots with empty string "" - abc
//domain name
//join local and domain name and add to the set