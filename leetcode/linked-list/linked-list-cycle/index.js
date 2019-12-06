// https://leetcode.com/problems/linked-list-cycle/

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
var hasCycle = function(head) {
    // Approach 1:
    let current = head
    while(current) {
        // if we've been here return true
        if (current.hasBeenVisited) return true;
        // otherwise, mark that we've been here
        current.hasBeenVisited = true
        // and continue looking
        current = current.next
    }
    return false
    // Approach 2: Two pointers
    //   let fast = head;
    //   let slow = head;

    //   while (fast && fast.next) {
    //     fast = fast.next.next;
    //     slow = slow.next;

    //     if (fast === slow) return true;
    //   }
    //   return false;
};
