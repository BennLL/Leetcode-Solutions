/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
    // handles vertical lines
    if (coords[0][0] === coords[1][0]) {
        for (let i = 2; i < coords.length; i++) {
            if (coords[i][0] !== coords[0][0]) {
                return false;
            }
        }
        return true; 
    }

    slope = (coords[1][1] - coords[0][1]) / (coords[1][0] - coords[0][0])

    console.log(slope)
    for(i = 0; i < coords.length - 1; i++){
        if((coords[i + 1][1] - coords[i][1]) / (coords[i + 1][0] - coords[i][0]) != slope){
            return false;
        }
    }

    return true;
};