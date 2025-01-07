/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    copy = [...nums1, ...nums2].sort(function(a,b){return a-b});
    mid = Math.floor(copy.length / 2);
    return copy.length % 2 == 0 ? (
        (copy[mid - 1] + copy[mid]) / 2
    ):copy[mid];
    
};