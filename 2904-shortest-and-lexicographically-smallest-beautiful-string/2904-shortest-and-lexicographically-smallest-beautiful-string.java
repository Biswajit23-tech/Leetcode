class Solution {
    public String shortestBeautifulSubstring(String s, int k) {
        String ans = "";
        int count = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {

            if (s.charAt(right) == '1')
                count++;

            while (count > k) {
                if (s.charAt(left) == '1')
                    count--;
                left++;
            }

            if (count == k) {
                while (s.charAt(left) == '0')
                    left++;

                String sub = s.substring(left, right + 1);

                if (ans.equals("") ||
                    sub.length() < ans.length() ||
                    (sub.length() == ans.length() && sub.compareTo(ans) < 0)) {
                    ans = sub;
                }
            }
        }

        return ans;
    }
}