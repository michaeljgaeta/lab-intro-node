class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
    this.items;
  }

  load(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let highestValue = Math.max(...this.items);
      return highestValue;
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let lowestValue = Math.min(...this.items);
      return lowestValue;
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      let total = this.items.reduce((sum, current) => sum + current, 0);
      return total;
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let total = this.items.reduce((sum, current) => sum + current, 0);
      return total / this.items.length;
    }
  }
}

module.exports = SortedList;
