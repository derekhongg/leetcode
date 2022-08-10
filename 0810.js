/* Happy Number */
/* Can use HashMap or two pointer 
Fast and slow pointer

*/

function getNumSum(n) {
    let total = 0;
    while(n !== 0) {
        let getLastDigit = n % 10;
        n = Math.floor(n/10);
        total += Math.pow(getLastDigit, 2)
    }
    return total;
}

function isHappy(num) {
    let fast = num;
    let slow = num;
    while(true) {
        fast = getNumSum(getNumSum(fast));
        slow = getNumSum(slow);
        if(fast === slow) {
            return fast === 1;
        }
    }
}