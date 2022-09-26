/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let current = new ListNode();
    let headofcurrent = current;
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    
    if(list1){
        current.next = list1;
        list1 = list1.next;
        current = current.next;
    }
    
    if(list2){
        current.next = list2;
        list2 = list2.next;
        current = current.next;
    }
    
    return headofcurrent.next;
};

// // used to test 


// var mergeTwoLists = function(list1, list2) {
//     let current = new Node();
//     let headofcurrent = current;
    
//     while(list1 && list2){
//         if(list1.data <list2.data){
//             current.next = list1;
//             list1 = list1.next;
//         }else{
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     if(list1){
//         current.next = list1;
//         list1 = list1.next;
//         current = current.next;
//     }
//     if(list2){
//         current.next = list2;
//         list2 = list2.next;
//         current = current.next;
//     }
//     printLinkedList(current);
//     return headofcurrent.next;
// };

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// function print(){
//     while(head){
//         console.log(head.value);
//         head = head.next;
//     }
// }

// const printLinkedList = (head) => {
//     let current = head;
//     while(current != null){
//         console.log(current.data);
//         current = current.next;
//     }
// }



// var a = new Node(1);
// var b = new Node(2);
// var c = new Node(4);

// a.next = b;
// b.next = c;

// var one = new Node(1);
// var two = new Node(3);
// var three = new Node(4);

// one.next = two;
// two.next = three;


// // printLinkedList(a);
// // console.log("--------------");
// // printLinkedList(one);
// console.log("--------------");
// console.log(mergeTwoLists(a , one));
