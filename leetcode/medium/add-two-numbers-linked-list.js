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

// use queue
// nodesum = l1currnode.val + l2currnode.val
// if nodesum >= 10, put 0 as nodeval (push to queue), then push 10s digit to queue
//
var addTwoNumbers = function (l1, l2) {
    let l1CurrNode = l1;
    let l2CurrNode = l2;
    const queue = [0];
    let outputLL = new ListNode();
    let currNode = outputLL;
    while (l2CurrNode || l1CurrNode) {
        const l1Val = l1CurrNode ? l1CurrNode.val : 0;
        const l2Val = l2CurrNode ? l2CurrNode.val : 0;
        const nodeSum = l1Val + l2Val + queue.pop();
        const nextVal = Math.floor(nodeSum / 10);
        queue.push(nextVal);
        const currVal = nodeSum % 10;
        currNode.next = new ListNode(currVal);
        currNode = currNode.next;
        l1CurrNode = l1CurrNode ? l1CurrNode.next : undefined;
        l2CurrNode = l2CurrNode ? l2CurrNode.next : undefined;
    }
    if (queue[0] > 0) {
        currNode.next = new ListNode(queue.pop());
    }
    return outputLL.next
};
