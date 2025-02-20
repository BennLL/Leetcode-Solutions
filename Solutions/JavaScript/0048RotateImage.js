/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix.length;
    let top = 0;
    let bot = length - 1;

    while(top < bot){
        for(let i = 0; i < length; i++){
            let temp = matrix[top][i];
            matrix[top][i] = matrix[bot][i];
            matrix[bot][i] = temp;
        }
        top++;
        bot--;
    }

    for(let i =0; i < length; i++){
        for(let x = i + 1; x < length; x++){
                let temp = matrix[i][x];
                matrix[i][x] = matrix[x][i];
                matrix[x][i] = temp;
        }
    }

};