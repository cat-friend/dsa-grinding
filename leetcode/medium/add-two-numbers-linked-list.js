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

// make a stack! stack holds Math.floor((l1.val + l2.val)/10)
// (l1.val + l2.val + stack.pop()) % 10 gets pushed to stack, added to the last value of the stack
    // only need to use end of stack if stack.length - 1 > i;
// if Math.floor((l1.val + l2.val)/10) > 0, then push Math.floor((l1.val + l2.val)/10) to stack
// then return stack!
 var addTwoNumbers = function(l1, l2) {
    // first fill output array with l1's values
    const output = [];
    const stack = [0];
    let currNode = l1;
    while (currNode) {
        output.push(currNode.val);
        currNode = currNode.next;
    };
    // second, traverse l2
        // output[i] = (l2.val + output[i] + stack.pop()) % 10;
        // stack.push(Math.floor((l1.val + l2.val)/10)) --> will send a >= 0
    currNode = l2;
    let i = 0;
    while (currNode) {
        output[i] = output[i] ? (currNode.val + output[i] + stack.pop()) % 10 : (currNode.val + stack.pop()) % 10;
        stack.push(Math.floor(currNode.val));
        i++;
        currNode = currNode.next
    }
    if (stack[0] > 0) output.push(stack.pop());
    // return output
    return output;
};
