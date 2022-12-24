/* Reshape the Matrix */

var reshapeMatrix = function(mat, r, c) {
    let row = mat.length; // length of the entire row
    let column = mat[0].length; // length of the entire column length inside the array

    let result = []; // set up new array to push new values in

    if(r * c !== row * column) {
        return mat; 
    } // taking care of edge case

    for(let i = 0; i < r * c; i++) { // loop through entire row and columns given
        let r = Math.floor(i/c);
        if(!result[r]) {
            result.push([]); // push new array in to set up rows and columns
        }
        result[r].push(mat[Math.floor(i / column)][i % column]);
    }
    return result;
}

/* Pascals Triange */

var generate = function(numRows){
    let pascalsTriangle = [];
    for(let i = 0; i < numRows; i++){
        let row = [];
        for (let j = 0; j < i + 1 ; j++){
            if (j == 0 || j == i) {
                row[j] = 1;
            } else {
                row[j] = pascalsTriangle[i-1][j-1] + pascalsTriangle[i-1][j]
            }
        }
        pascalsTriangle.push(row);
    }
    return pascalsTriangle;
}