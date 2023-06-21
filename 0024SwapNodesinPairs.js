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
var swapPairs = function(head) {
    copy = new ListNode(null)
    copy.next = head;
    curr = copy;

    while(curr.next !== null && curr.next.next !== null){
       n1 = curr.next;
       n2 = curr.next.next;
       curr.next = n2;
       n1.next = n2.next;
       n2.next = n1;
       curr = curr.next.next;
    }

    return copy.next;

};