/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    ans = [];
    for(i = 0; i < nums1.length; i++){
        temp = nums2.indexOf(nums1[i]);
        stat = false;
        for(x = temp; x < nums2.length; x++){
            if(nums2[x] > nums2[temp]){
                ans.push(nums2[x]);
                stat = true;
                break;
            }
        }
        if(stat == false){
            ans.push(-1)
        }

    }
    return ans;
};