class Block {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dir = 1;
    this.vel=2;
  }

  show() {
    fill(128, 46, 35);
    strokeWeight(3);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h, 6);
  }     

  move() {
    this.x += this.vel * this.dir;
  }

  hitsShip(ship) {
    let d = dist(this.x, this.y, ship.x, ship.y);
    return d < this.h-40;

  }


}