/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // link the two lists together so they are the same length and return the node with the same address
    // 4 1 8 4 5 | 5 6 1 8 4 5
    // 5 6 1 8 4 5 | 4 1 8 4 5

    if(!headA || !headB){return null;}
    a = headA;
    b = headB;

    while(a !== b){
        if(a === null){a = headB;}else{a = a.next;}
        if(b === null){b = headA;}else{b = b.next;}
    }

    return a;
};