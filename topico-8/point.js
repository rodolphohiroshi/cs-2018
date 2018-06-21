class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    console.log(a.x);
    console.log(a.y);
    console.log(b.x);
    console.log(b.y);

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 4);
const p2 = new Point(10, 9);

console.log(Point.distance(p1, p2));