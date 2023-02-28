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
// var reverseList = function(head) {
//     newArr = [];
//     if(!head){
//         return head;
//     }else{
//         while(head){
//             newArr.push(head.val);
//             head = head.next;
//         }
//     }

//     newArr.reverse();
//     tempNode = new ListNode(newArr[0]);
//     currNode = tempNode;
    

//     for(i = 1; i < newArr.length ; i++ ){
//         currNode.next = new ListNode(newArr[i]);
//         currNode = currNode.next;
//     }

//     return tempNode;

// };
// improved version
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
var reverseList = function(head) {
    if(!head){
        return head;
    }
    
    prev = new ListNode(head.val)
    prev.next = null;
    head = head.next;

    while(head){
        temp = new ListNode(head.val)
        temp.next = prev;
        prev = temp;
        head = head.next;
    }

    return prev;

};