/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let tempDict = {};
    let ans = [];
    for (let i = 0; i < strs.length; i++) {
        let splitWord = strs[i].split("").sort().join("");
        if(tempDict[splitWord] !== undefined){
            tempDict[splitWord].push(strs[i]);
        }else{
            tempDict[splitWord] = [strs[i]]
        }
    }

    for (const key of Object.keys(tempDict)) {
        ans.push(tempDict[key]);
    }

    return ans;
};