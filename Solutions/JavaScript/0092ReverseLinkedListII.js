/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    copy = head;
    start = head;
    count = 1;
    while(count < left){
        start = copy;
        copy = copy.next;
        count++;
    }

    prev = null; 
    end = copy;
    while(count <= right){
        let next = copy.next;
        copy.next = prev;
        prev = copy;
        copy = next;
        count++;
    }

    start.next = prev;
    end.next = copy;

    if(left == 1){return prev}else{return head;}
};