/* Climbing Stairs

- You can only climb one or two steps
How many different distinct ways can you climb to the top


*/

function climbingStairs(n) {
    let steps = [1, 1, 2]; // create array of steps from the beginning
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2]
    }
    return steps[n]
}