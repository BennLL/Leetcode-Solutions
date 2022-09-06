var mergeTwoLists = function(list1, list2) {
    
    for(x = 0; x < list2.length; x++){
        list1.push(list2[x])
    }
    
    list1.sort(function(a, b){return a - b});
    return list1
};

list1 = [52,3,6], list2 = [6,7,1,2]
console.log(mergeTwoLists(list1, list2))

/*
Eample 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

list1 = [52,3,6], list2 = [6,7,1,2]
*/