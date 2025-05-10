const MAX_SIZE = 10;

class Window {
  constructor() {
    this.window = [];
  }

  add(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return false;
    for (const num of nums) {
      if (this.window.length >= MAX_SIZE) {
        this.window.shift();
      }
      this.window.push(num);
    }
    return true;
  }

  avg() {
    if (this.window.length === 0) return 0;
    const sum = this.window.reduce((acc, val) => acc + val, 0);
    return sum / this.window.length;
  }

  get() {
    return this.window;
  }
}

module.exports = new Window();
