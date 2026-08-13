var maxSubarrayLength = function(nums, k) {
    let left = 0;
    let maxLength = 0;
    let freq = new Map();
    for (let right = 0; right < nums.length; right++) {
        // Add current element
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
        // If frequency becomes greater than k,
        // shrink the window from the left
        while (freq.get(nums[right]) > k) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            left++;
        }
        // Current window is valid
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};