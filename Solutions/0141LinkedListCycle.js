/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    copy = head;
    while(head && head.next){
        head = head.next.next;
        copy = copy.next;
        if(head === copy){
            return true;
        }
    }

    return false;
};