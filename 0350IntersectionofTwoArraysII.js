/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function(a,b){return a-b})
    nums2.sort(function(a,b){return a-b})
    same = []
    n1 = 0;
    n2 = 0;
    while(n1 < nums1.length && n2 < nums2.length){
        if(nums1[n1] == nums2[n2]){
            same.push(nums1[n1]);
            n1++;
            n2++;
        }else if(nums1[n1] < nums2[n2]){
            n1++;
        }else if(nums1[n1] > nums2[n2]){
            n2++;
        }
    }
    return same;
};