export class Rect {
  ex: number;
  ey: number;
  constructor(public x: number, public y: number, public width: number, public height: number) {
    this.ex = this.x + this.width;
    this.ey = this.y + this.height;
  }

  hit(e: MouseEvent) {
    return e.offsetX > this.x && e.offsetX < this.ex && e.offsetY > this.y && e.offsetY < this.ey;
  }
}