/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

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
var mergeTwoLists = function (list1, list2) {
    let list1CurrNode = list1;
    let list2CurrNode = list2;
    let currNode;
    let listHead;
    console.log('list1', list1, 'list2', list2)
    if (!list1 && !list2) return list1;
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
        listHead = new ListNode(list1.val);
        prevNode = listHead;
        list1CurrNode = list1.next;
    }
    else {
        listHead = new ListNode(list2.val);
        prevNode = listHead;
        list2CurrNode = list2.next;
    }
    while (list1CurrNode) {
        if (!list2CurrNode) {
            prevNode.next = list1CurrNode
            break;
        }
        if (list1CurrNode.val < list2CurrNode.val) {
            currNode = new ListNode(list1CurrNode.val);
            prevNode.next = currNode;
            prevNode = currNode;
            list1CurrNode = list1CurrNode.next
        }
        else {
            currNode = new ListNode(list2CurrNode.val);
            prevNode.next = currNode;
            prevNode = currNode;
            list2CurrNode = list2CurrNode.next
        }
    }
    if (list2CurrNode) {
        prevNode.next = list2CurrNode;
    }
    return listHead;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

console.log(mergeTwoLists([], [0]));

// results:
// runtime: 5.17%
// memory: 79.47%
