/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    moves = moves.split("");
    pos = [0,0];

    for(i = 0; i < moves.length; i++){
        if(moves[i] == "U"){
            pos[0]++;
        }
        if(moves[i] == "D"){
            pos[0]--;
        }
        if(moves[i] == "R"){
            pos[1]++;
        }
        if(moves[i] == "L"){
            pos[1]--;
        }
    }

    return(pos[0] == 0 && pos[1] == 0);
};