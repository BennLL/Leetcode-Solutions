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
var sortList = function(head) {
    copy = [];
    while(head){
        copy.push(head.val);
        head = head.next;
    }

    copy.sort(function(a,b){return a - b;});
    console.log(copy)

    ans = new ListNode();
    start = ans;
    for(i = 0; i < copy.length; i++){
        temp = new ListNode(copy[i]);
        ans.next = temp;
        ans = ans.next;
    }

    return start.next;
};