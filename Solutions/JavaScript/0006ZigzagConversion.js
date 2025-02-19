/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if(numRows == 1){return s};

    let arr = new Array(numRows).fill("");
    let forward = true;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        arr[count] += s[i];
        if (count == numRows - 1 && forward == true) {
            forward = !forward;
        }

        if (count == 0 && forward == false) {
            forward = !forward;
        }

        if (forward) {
            count++;
        } else {
            count--;
        }

    }
    console.log(arr);
    let ans = arr.join("");
    return ans;

};