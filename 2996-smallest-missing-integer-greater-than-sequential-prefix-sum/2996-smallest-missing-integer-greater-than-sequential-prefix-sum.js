var missingInteger = function(nums) {
    let sum = nums[0];
    // Find the longest sequential prefix
    let i = 1;
    while (i < nums.length && nums[i] === nums[i - 1] + 1) {
        sum += nums[i];
        i++;
    }
    // Find the smallest missing integer >= sum
    let set = new Set(nums);
    let ans = sum;
    while (set.has(ans)) {
        ans++;
    }
    return ans;
};