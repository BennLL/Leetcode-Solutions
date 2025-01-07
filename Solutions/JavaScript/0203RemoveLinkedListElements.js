/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    tempNode = new ListNode();
    tempNode.next = head;
    currNode = tempNode

    while(head !== null){
        if(head.val === val){
            currNode.next = head.next;
        }else{
            currNode = head;
        }

        head = head.next;
    }

    return tempNode.next;
    
};