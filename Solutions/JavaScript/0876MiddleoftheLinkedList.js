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
var middleNode = function(head) {
    nodeArr = []
    while(head){
        nodeArr.push(head);
        head = head.next;
    }

    return nodeArr[Math.floor(nodeArr.length / 2)]
};