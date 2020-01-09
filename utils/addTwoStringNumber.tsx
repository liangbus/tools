/**
 * 字符串大数相加
 * @param num1 数字串1
 * @param num2 数字串2
 */
const addStringNumber = function(num1: string, num2: string) {
  const maxLen = Math.max(num1.length, num2.length);
  const _num1 = fillZero(num1, maxLen);
  const _num2 = fillZero(num2, maxLen);
  let i = maxLen - 1,
    res = "",
    forward = !!0; // 进1
  while (i >= 0) {
    let t = ~~_num1.charAt(i) + ~~_num2.charAt(i) + ((forward && 1) || 0);
    forward = t >= 10;
    res = (forward ? t - 10 : "" + t) + res;
    i--;
  }
  return forward ? "1" + res : res;
};
// 填充 0
function fillZero(numStr: string, maxLen: number): string {
  return numStr.length >= maxLen
    ? numStr
    : Array(maxLen - numStr.length)
        .fill(0)
        .join("") + numStr;
}

interface LinkNode {
  val: number;
  next: LinkNode;
}
//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 链表类型的大数相加
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function addTwoNumbers(l1: LinkNode, l2: LinkNode): LinkNode {
  let head = null,
    prev = null,
    cur1 = l1,
    cur2 = l2,
    forward = false;
  let node = null;
  while (cur1 || cur2) {
    let t =
      ((cur1 && cur1.val) || 0) +
      ((cur2 && cur2.val) || 0) +
      ((forward && 1) || 0);
    forward = t >= 10;
    node = new ListNode(forward ? t - 10 : t);
    if (!head) {
      // 链表头
      head = node;
      prev = node;
    } else {
      prev.next = node;
      prev = node;
    }

    if (cur1) cur1 = cur1.next;
    if (cur2) cur2 = cur2.next;
  }
  if (forward) {
    node = new ListNode(1);
    node.next = null;
    prev.next = node;
  }
  return head;
}

export default addStringNumber;
