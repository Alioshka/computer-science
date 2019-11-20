// Given a linked list, remove the n-th node from the end of list and return its head.
//
//     Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
//     Given n will always be valid.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = {next:head};
    let len = 0;
    let temp = head;
    while (temp) {
        len++;
        temp = temp.next;
    }
    len -= n;
    temp = current;
    while(len > 0){
        len--;
        temp = temp.next;
    }
    temp.next = temp.next.next;
    return current.next;
};
