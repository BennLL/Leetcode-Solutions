/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    num = []
    while(head){
        num.push(head.val);
        head = head.next;
    }
    
    Temp = new ListNode();
    TempNode = Temp;

    for(i = 0; i < num.length; i++){
        if(i != num.length - n){
            TempNode.next = new ListNode(num[i]);
            TempNode = TempNode.next;
        }
    }

    return Temp.next
};