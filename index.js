class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length++;
    return this.items;
  }

  load(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(this.items);
    }
  }

  min() {
    if (!this.items) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(this.items);
    }
  }

  sum() {
    if (!this.items) {
      return 0;
    } else {
      let result = this.items.reduce(sum + current, 0);
      return result;
    }
  }

  avg() {
    let result = this.items.reduce(sum + current, 0);
    return result / this.items.length;
  }
}

module.exports = SortedList;
