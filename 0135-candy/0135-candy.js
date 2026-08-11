var candy = function(ratings) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);
    // Left to Right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    // Right to Left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    // Calculate total
    let total = 0;
    for (let candy of candies) {
        total += candy;
    }
    return total;
};