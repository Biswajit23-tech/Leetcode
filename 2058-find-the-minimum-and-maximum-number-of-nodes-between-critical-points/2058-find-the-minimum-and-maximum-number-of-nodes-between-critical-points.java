class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        int first = -1;
        int prevCritical = -1;
        int min = Integer.MAX_VALUE;
        int max = -1;

        ListNode prev = head;
        ListNode curr = head.next;
        int index = 1;
        while (curr.next != null) {
            ListNode next = curr.next;
            if ((curr.val > prev.val && curr.val > next.val) ||
                (curr.val < prev.val && curr.val < next.val)) {

                if (first == -1) {
                    first = index;
                } else {
                    min = Math.min(min, index - prevCritical);
                    max = index - first;
                }

                prevCritical = index;
            }
            prev = curr;
            curr = next;
            index++;
        }
        if (min == Integer.MAX_VALUE) {
            return new int[]{-1, -1};
        }
        return new int[]{min, max};
    }
}