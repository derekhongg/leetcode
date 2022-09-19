// 1. Max Profit 
// start minimum at the first index of the array
// set maximum to zero
// loop through array after the first index;
// write difference variable to compare value at the current index to the first value;
// write conditional to compare the difference to the maximum, change value if needed;
// return maximum

var maxProfit = function(prices) {
    let minimum = prices[0];
    let maximum = 0;
    for (let i = 1; i < prices.length; i++) {
        let difference = prices[i]-minimum;
        
        if(difference > maximum) {
            maximum = difference;
        }
        if(prices[i] < minimum){
            minimum = prices[i];
        }
    }
    return maximum;
};