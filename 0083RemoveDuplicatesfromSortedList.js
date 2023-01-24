/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    newArr = [];
    while(head){
        newArr.push(head.val);
        head = head.next;
    }

    newArr.sort(function(a,b){return a - b})

    newSet = new Set(newArr);

    Arr = Array.from(newSet);

    tempNode = new ListNode();
    currNode = tempNode;

    for(i = 0; i < Arr.length; i++){
        currNode.next = new ListNode(Arr[i]);
        currNode = currNode.next;
    }

    return tempNode.next;
};