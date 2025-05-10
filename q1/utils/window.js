const MAX_SIZE = 10;

class Window {
  constructor() {
    this.window = [];
  }

  add(num) {
    if (!num) return false;

    if (num.length > MAX_SIZE) return false;

    this.window.push(num);
  }

  avg(num) {
    sum = 0;
    for (let i = 0; i < num.length - 1; i++) {
      sum += num[i];
    }
    return sum / num.length;
  }

  get() {
    return this.window;
  }
}

module.exports = new Window();
