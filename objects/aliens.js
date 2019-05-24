class Alien {

  constructor(x, y, r, dir) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dir = dir;
    this.dead = false;
    let num=random(0,1);
    if(level==1)
    this.hasLaser=num<0.25;
    else if(level==2)
    this.hasLaser=num<0.3;
    else if(level==3)
    this.hasLaser=num<0.35;
    this.laserX=x;
    this.laserY=y;
    this.startY=y;
    this.vel=random(1,2);
  }

  show() {
    if(this.hasLaser){
    fill(200, 0, 0);
    stroke(0);
    strokeWeight(2);
    ellipse(this.laserX, this.laserY, 7, 7);
    }
    image(img, this.x, this.y, this.r * 2, this.r * 2);
  }

  move() {
    if(this.laserY>height+10) this.laserX=this.x;
    this.x -= -2 * this.dir;
    this.laserX+=0.5*this.dir;
  }
  
  shoot(){
  if(this.hasLaser){
    if(this.laserY>height-2) this.laserY=this.startY;
    this.laserY+=this.vel;
    }
  }
  
  hits(ship) {  
    // let d=dist(this.laserX,this.laserY,ship.x+30,ship.y+35);
    // return d<28;
    if(this.hasLaser)
    return (this.laserY >= ship.y+5 && this.laserY <=ship.y+50 && this.laserX >= ship.x+10 &&                 this.laserX <= ship.x+35);    
  }
}