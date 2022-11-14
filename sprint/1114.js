var containsDuplicate = function(nums) {
    let hashMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if(hashMap[val] !== undefined) {
            return true;
        } else {
            hashMap[val] = 0;
        }
        
    }
    return false;
};

function maxProfit(prices) {
    let min = prices[0];
    let max = 0;

    for(let i = 1; i < prices.length; i++) {
        let dif = prices[i] - min;

        if(dif > max) {
            max = dif;
        }

        if(prices[i] < min) {
            min = prices[i];
        }
    }
    return max;
}