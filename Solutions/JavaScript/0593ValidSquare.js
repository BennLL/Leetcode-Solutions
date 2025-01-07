/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    function dist(a, b){
        return (((b[0] - a[0])**2 + (b[1] - a[1])**2 ) ** 0.5)
    }

    d = [
        dist(p1, p2),
        dist(p1, p3),
        dist(p1, p4),
        dist(p2, p3),
        dist(p2, p4),
        dist(p3, p4),
    ].sort(function(a,b){return a - b;});

    return d[0] && d[0] == d[1] & d[0] == d[2] & d[0] == d[3] & d[4] == d[5];
};