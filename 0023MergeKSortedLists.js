/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    arr = [];
    for(i = 0; i < lists.length; i++){
        while(lists[i]){
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    arr.sort(function(a,b){return a - b;})

    console.log(arr);
    let start = new ListNode();
    let copy = start;


    for(i = 0; i < arr.length; i++){
        let temp = new ListNode(arr[i]);
        start.next = temp;
        start = start.next;
    }

    return copy.next;
};