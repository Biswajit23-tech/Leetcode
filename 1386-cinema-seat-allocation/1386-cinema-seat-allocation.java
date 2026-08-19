class Solution {
    public int maxNumberOfFamilies(int n, int[][] reservedSeats) {
        int ans = 2 * n;
        java.util.HashMap<Integer, Integer> map = new java.util.HashMap<>();
        for (int[] seat : reservedSeats) {
            int row = seat[0];
            int s = seat[1];
            if (s >= 2 && s <= 9) {
                map.put(row, map.getOrDefault(row, 0) | (1 << s));
            }
        }
        for (int mask : map.values()) {
            boolean left = true;   // seats 2,3,4,5
            boolean middle = true; // seats 4,5,6,7
            boolean right = true;  // seats 6,7,8,9

            for (int seat = 2; seat <= 5; seat++) {
                if ((mask & (1 << seat)) != 0) {
                    left = false;
                }
            }

            for (int seat = 4; seat <= 7; seat++) {
                if ((mask & (1 << seat)) != 0) {
                    middle = false;
                }
            }

            for (int seat = 6; seat <= 9; seat++) {
                if ((mask & (1 << seat)) != 0) {
                    right = false;
                }
            }
            if (left && right) {
                ans -= 0; // two groups can still fit
            } else if (left || middle || right) {
                ans -= 1;
            } else {
                ans -= 2;
            }
        }
        return ans;
    }
}