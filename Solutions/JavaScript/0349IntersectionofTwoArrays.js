/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set1 = new Set(nums1);
    var set2 = new Set(nums2);

    return Array.from(set1).filter( num => set2.has(num));
};