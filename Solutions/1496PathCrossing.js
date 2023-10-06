/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    path = path.split("");
    position = [0, 0];
    visited = new Set();

    for(i = 0; i < path.length; i++){
        visited.add([...position].join(","));
        if(path[i] == "N"){position[1]++}
        if(path[i] == "S"){position[1]--}
        if(path[i] == "W"){position[0]--}
        if(path[i] == "E"){position[0]++}
        if(visited.has([...position].join(","))){return true}
    }
    return false;
};