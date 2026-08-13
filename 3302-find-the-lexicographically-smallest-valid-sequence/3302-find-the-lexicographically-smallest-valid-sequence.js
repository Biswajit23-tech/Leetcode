var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const suf = new Array(m);
    let j = m - 1;

    for (let i = n - 1; i >= 0 && j >= 0; i--) {
        if (word1[i] === word2[j]) {
            suf[j] = i;
            j--;
        }
    }
    const ans = [];
    let usedMismatch = false;
    j = 0;
    for (let i = 0; i < n && j < m; i++) {
        if (word1[i] === word2[j]) {
            ans.push(i);
            j++;
        }
        else if (!usedMismatch) {
            if (j === m - 1 || (suf[j + 1] !== undefined && suf[j + 1] > i)) {
                ans.push(i);
                usedMismatch = true;
                j++;
            }
        }
    }
    return ans.length === m ? ans : [];
};