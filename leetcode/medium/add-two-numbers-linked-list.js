/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// spread operator the first one
// iterate through second, add to same index on the first
// !! watch out for l1[i] + l2[i] >= 10;
    // l1[i+1] + l2[i+1] + Math.ceil((l1[i] + l2[i])/10)
var addTwoNumbers = function (l1, l2) {
    const output = [...l1];
    output[0] = (l1[0] + l2[0]) % 10;
    for (let i = 1; i < l2.length; i++) {
        output[i] = l1[i] + l2[i] + Math.ceil((l1[i-1] + l2[i-1])/10)
    }
    return output;
};
