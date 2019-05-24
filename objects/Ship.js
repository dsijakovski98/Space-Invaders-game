class Ship {

  constructor() {

    this.x = width / 2;
    this.y = height-80;
  }

  show() {
  
    image(img1, this.x, this.y, 50, 50);

  }

  moveLateral(dir) {
    this.x += 5 * dir;

  }

  moveUp(dir) {

    this.y += 3 * dir;
  }


}