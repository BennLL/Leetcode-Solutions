/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    result = [];
    search(0, [], 0);

    function search(i, cur, total){
        if(total == target){
            result.push([...cur]);
            return;
        }
        if(i >= candidates.length || total > target){
            return;
        }
        cur.push(candidates[i]);
        search(i, cur, total + candidates[i]);
        cur.pop();
        search(i + 1, cur, total);
    }
    return result;
};