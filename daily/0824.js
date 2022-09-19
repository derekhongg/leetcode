/* First Bad Version

-Given two inputs

*/

var solution = function(isBadVersion) {

    return function(n) {
        // 1 2 3 4x 5
        let start = 0;
        let end = n;
        while(start < end) {
            let middle = start + Math.floor((end-start)/2)
            if(!isBadVersion(middle)) {
                start = middle + 1;
            } else {
                end = middle;
            }
        }
        return start;
    };
};