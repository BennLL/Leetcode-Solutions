// used to test 
var DrawTriangle = function(size){
    if(size != 1){
        DrawTriangle(size - 2);
     }
  
     spaces = ((19 % (size)) / 2);

     for(i = 0; i < spaces; i++){
        console.log(" ");
     }
  
     for(i = 0; i < size; i++){
        console.log("*");
     }
     console.log();
}

DrawTriangle(19);


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
