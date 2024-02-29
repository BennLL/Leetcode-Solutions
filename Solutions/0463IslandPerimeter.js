/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    ans = 0;
    for(i = 0; i < grid.length; i++){
        for(j = 0; j<grid[i].length; j++){
            if(grid[i][j] === 1){
                ans += checkSides(i,j)
            }
        }
    }

    function checkSides(i ,j){
        temp = 4;
        if(i - 1 >=0){temp = (grid[i-1][j] === 1) ? temp - 1 : temp}
        if(j - 1 >=0){temp = (grid[i][j - 1] === 1) ? temp - 1 : temp}
        if(i + 1 < grid.length){temp = (grid[i+1][j] === 1) ? temp - 1 : temp};
        if(j + 1 < grid[i].length){temp = (grid[i][j+1] === 1) ? temp - 1 : temp};
        return temp;
    }

    return ans;
};

