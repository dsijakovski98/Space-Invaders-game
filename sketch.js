let img;
let img1;
let img2;
let shot;
let win;
let music;
let ship;
let bullets = [];
let aliens = []
let start = false;
let blocks = [];
let x1;
let y1;
let lasers = [];
let level = 0;


function preload() {
  img = loadImage('images/alien.png');
  img1 = loadImage('images/ship.png');
  img2 = loadImage('images/galaxy.jpg');
  // shot = loadSound('sounds/laserShot.mp3');
  // shot.setVolume(0.1);
  // win = loadSound('sounds/win.mp3');
  // win.setVolume(0.1);
}

function setup() {
  createCanvas(850, 550);
  reset();
}
var edge = false;
var edgeBlocks = false;

function draw() {
  if (level > 0) {
    background(img2);
    lvlSetup();
  
     push();
    fill(255);
    noStroke();
    textSize(14);
    text("Score: " + score, 750, 30);
    pop();

    //BLOCKS
    for (var b = 0; b < blocks.length; b++) {
      if (aliens.length != 0) {
        blocks[b].show();
        blocks[b].move();
        ship.show();
        if (blocks[b].x < 20 || blocks[b].x > width - 30)
          edgeBlocks = true;
      }
    }

    //ALIENS
    for (var a = 0; a < aliens.length; a++) {
      if (!aliens[a].dead) {
        if (aliens[a].hits(ship)) {
          gameOver();
        }
        aliens[a].show();
        aliens[a].move();
        aliens[a].shoot();
      }
      if (aliens[a].x < 0 || aliens[a].x >= width - 20)
        edge = true;
    }

    //OBJECTS BOUNCE
    if (edge) {
      for (var m = 0; m < aliens.length; m++)
        aliens[m].dir *= -1;
    }
    if (edgeBlocks) {
      for (var m1 = 0; m1 < blocks.length; m1++) {
        blocks[m1].dir *= -1;
      }
    }
    edgeBlocks = false;
    edge = false;


    //COLLIDING LOGIC
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].shoot();
      for (var j = 0; j < aliens.length; j++) {
        if (bullets[i].hitsAlien(aliens[j])) {
          for (var p = 0; p < lasers.length; p++) {
            if (lasers[p].index == j)
              //lasers.splice(p, 1);
              lasers[p].dead = true;
          }
          aliens[j].dead = true;
          bullets[i].dead = true;
          score += 5;
        }
      }
    }
    for(i=0;i<aliens.length;i++){
    if(aliens[i].dead && aliens[i].laserY>height)
      aliens[i].hasLaser=false;
    }
      

    for (i = 0; i < bullets.length; i++) {
      for (j1 = 0; j1 < blocks.length; j1++) {
        if (bullets[i].hitsBlock(blocks[j1])) {
          bullets[i].dead = true;
        }
      }
    }
    var direction = 1;
    for (j2 = 0; j2 < blocks.length; j2++) {
      ship.show();
      if (blocks[j2].hitsShip(ship)) {
        direction = 0;
      }
    }


    //MOVEMENTS
    if (keyIsDown(LEFT_ARROW)) {
      if (ship.x > 0)
        ship.moveLateral(direction * -1);
    } else if (keyIsDown(RIGHT_ARROW)) {
      if (ship.x < width - 45)
        ship.moveLateral(direction);
    }
    if (keyIsDown(UP_ARROW)) {
      if (level < 3) {
        if (ship.y > 290)
          ship.moveUp(direction * -1);
      } else if (level == 3) {
        if (ship.y > 340 || ((ship.x > 0 && ship.x < 80) && (ship.x > 400 && ship.x < width)))
          ship.moveUp(direction * -1);
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      if (ship.y < 520)
        ship.moveUp(direction);
    }


    //ALIENS,BULLETS MANAGEMENT
    for (var c = 0; c < aliens.length; c++) {
      if (aliens[c].dead)
        aliens.splice(c, 1);
    }
    for (p1 = 0; p1 < bullets.length; p1++) {
      if (bullets[p1].dead) {
        bullets.splice(p1, 1);
      }
    }

    //FINISH
    finish();
  } else if (level == 0)
    startScreen();
}

function keyPressed() {
  if (key === ' ') {
    // shot.play();
    var bullet = new Bullet(ship.x + 15, ship.y - 30, 3);
    bullets.push(bullet);
  }
  if (keyCode === ENTER) {
    if (level == -1) level++;
    if (level == 0) {
      start = true;
    }
    if (start) {
      if (level < 3) level++;
      else if (level == 3) {
        level = 1;
        score = 0;
      }
      reset();
    }
  }
}

let score = 0;

function reset() {
  start = false;
  ship = new Ship();
  if (level == 1) level1();
  else if (level == 2) level2();
  else if (level == 3) level3();
}