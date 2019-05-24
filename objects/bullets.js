class Bullet {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dead = false;
  }

  show() {
    fill(0, 255, 0);
    strokeWeight(1);
    stroke(0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  shoot() {
    this.y -= 5;
    if(this.y<0)
      this.dead=true;
  }

  hitsAlien(alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);
    return d < this.r + alien.r * 2;
  }

  hitsBlock(block) {
    let d2 = dist(this.x, this.y, block.x + (block.w / 3), block.y - 20);
    let d1 = dist(this.x, this.y, block.x - (block.w / 3), block.y - 20);

    return (d1 < this.r + 30) || (d2 < this.r + 30);
  }





}