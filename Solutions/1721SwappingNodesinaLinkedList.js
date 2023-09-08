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
var swapNodes = function(head, k) {
    ans = [];
    while(head){
        ans.push(head.val);
        head = head.next;
    }

    temp = ans[k - 1];
    ans[k - 1] = ans[ans.length - k];
    ans[ans.length - k] = temp;

    result = new ListNode(null);
    copy = result;

    for(i = 0; i < ans.length; i++){
        copy.next = new ListNode(ans[i]);
        copy = copy.next;
    }

    return result.next;
};