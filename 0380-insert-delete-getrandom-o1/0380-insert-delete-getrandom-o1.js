var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();
};
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
};
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    let index = this.map.get(val);
    let last = this.arr[this.arr.length - 1];
    this.arr[index] = last;
    this.map.set(last, index);
    this.arr.pop();
    this.map.delete(val);
    return true;
};
RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};