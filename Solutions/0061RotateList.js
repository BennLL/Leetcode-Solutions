/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head){return head;}
    
    end = head;
    start = head;
    count = 1;
    while(end && end.next){
        end = end.next;
        count++;
    }

    end.next = start;
    after = null;
    steps = count - (k % count);
    console.log(steps);

    while(steps > 0){
        end = end.next;  
        after = end.next;  
        steps--;
    }

    end.next = null;

    return after

};