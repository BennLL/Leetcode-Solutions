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
var mergeNodes = function(head) {
    output = new ListNode();
    first = output
    
    head = head.next;
    sum = 0;
    while(head){
        if(head.val !== 0){
            sum += head.val;
        }else if(head.val == 0){
            temp = new ListNode(sum)
            output.next = temp;
            output = output.next;
            sum = 0;
        }
        head = head.next;
    }

    return first.next;
};