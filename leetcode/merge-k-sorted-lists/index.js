// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }

    // do loop till we merge all lists into one
    while (lists.length > 1) {
        let a = lists.pop(); // remove last list form lists array
        let b = lists.pop(); // remove another last list form lists array

        const c = mergeTwoLists(a, b); // get merged sorted list and put it back to lists array
        lists.push(c);
    }
    return lists[0];
};

// https://leetcode.com/problems/merge-two-sorted-lists/
function mergeTwoLists(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
};
