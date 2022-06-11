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

// add the two nodes -> yield nodeSum
// nodeSum % 10 -> output nodeVal
// Math.floor(nodeSum/10) -> next.val
// if only only l1/l2 --> add one of the values to next.val (which is now curr.val)
// what happens when you reach the end?
// if no l1CurrNode.next && no l2CurrNode.next --> make the  Math.floor(nodeSum/10) -> next.val
var addTwoNumbers = function (l1, l2) {
    let l1CurrNode = l1;
    let l2CurrNode = l2;
    let outputLL = new ListNode();
    const stack = [0];
    while (l2CurrNode || l1CurrNode) {
        const nodeSum = (l1CurrNode.val ? l1CurrNode.val : 0) + (l2CurrNode.val? l2CurrNode.val : 0);
        const nextVal = Math.floor(nodeSum/10);
        stack.push(nextVal);
        const currVal = nodeSum % 10;
        outputLL.val = currVal;
        
    }
    console.log("outputLL", outputLL)
    return outputLL;

};
