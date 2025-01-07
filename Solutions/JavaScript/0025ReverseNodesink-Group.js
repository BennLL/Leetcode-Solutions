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
var reverseKGroup = function(head, k) {
    container = [];
    ans = new ListNode(null);
    copy = ans;
    count = 0;

    while(head){
        container.push(head.val);
        count++;
        head = head.next;
        if(count == k){
            container = container.reverse();
            for(i = 0; i < k; i++){
                temp = new ListNode(container[i])
                ans.next = temp;
                ans = ans.next;
            }
            container = [];
            count = 0;
        }
    }
    
    for(i = 0; i < container.length; i++){
        temp = new ListNode(container[i])
        ans.next = temp;
        ans = ans.next;
    }

    return copy.next;
};