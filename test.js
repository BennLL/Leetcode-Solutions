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

// /// console.log("answer: ", nextGreaterElement([2,1,3], [2,3,1])) //expected 3, -1, -1
// // console.log("answer: ", nextGreaterElement([4,1,2], [1,3,4,2]))
// console.log("answer: ", nextGreaterElement([3,1,5,7,9,2,6], [1,2,3,5,6,7,9,11])) // expected [5,2,6,9,11,3,7]
