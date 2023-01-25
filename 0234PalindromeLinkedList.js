/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    newArr = [];
    while(head){
        newArr.push(head.val);
        head = head.next;
    }

    tempArr = [...newArr];
    tempArr.reverse();

    return (JSON.stringify(newArr) == JSON.stringify(tempArr));
};