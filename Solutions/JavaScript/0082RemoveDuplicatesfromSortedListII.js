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
var deleteDuplicates = function(head) {
    copy = head;
    map = {};

    while(head){
        if(map[head.val]){
            map[head.val]++
        }else{
            map[head.val] = 1;
        }

        head = head.next;
    }

    ans = [];
    while(copy){
        if(map[copy.val] === 1){
            ans.push(copy.val);
        }
        copy = copy.next;
    }

    answer = new ListNode(null);
    copy = answer;

    for(i = 0; i < ans.length; i++){
        temp = new ListNode(ans[i]);
        answer.next = temp;
        answer = answer.next;
    }


    return copy.next;

};
// can be way faster