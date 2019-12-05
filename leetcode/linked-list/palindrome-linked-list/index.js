// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const array = [];
    while(head){
        array.push(head.val);
        head = head.next;
    }

    let start = 0;
    let end = array.length - 1;
    while(start < end){
        if(array[start] !== array[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};
