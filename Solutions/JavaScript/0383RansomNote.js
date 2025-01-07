/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ran, mag) {
    count = 0;
    magHash = {};

    for (i = 0; i < mag.length; i++) {
        if (magHash[mag[i]] !== undefined) {
            magHash[mag[i]]++;
        } else {
            magHash[mag[i]] = 1;
        }
    }

    for (i = 0; i < ran.length; i++) {
        if (magHash[ran[i]] !== undefined) {
            if (magHash[ran[i]] > 0) {
                magHash[ran[i]]--;
                count++;
            } else {
                return false;
            }
        }
    }

    return count == ran.length;
};