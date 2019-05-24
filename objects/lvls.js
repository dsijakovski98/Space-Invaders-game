function startScreen() {
  background(img2);
  fill(255);
  textSize(15);
  //textStyle();
  textFont('cursive');
  text('by dsiijakovski69.', 0, 20);
  fill(0, 200);
  textSize(40);
  textFont('fantasy');
  text('~SPACE INVADERS~', width / 2 - 160, height / 2 - 30);
  textSize(25);
  text('Press ENTER to START!', width / 2 - 125, height / 2 + 5);
}


function level3() {
  var x = 25;
  var y = 75;
  for (let j = 0; j < 36; j++) {
     if (j == 12) {
      x = 25;
      y = 120;
    }
    if (j == 24) {
      x = 25;
      y = 166;
    }
    aliens[j] = new Alien(x, y, 15, 1);
    x += 50;
  }
  x1 = 200;
  y1 = 260;
  let w = random(60, 80);
  for (let i = 0; i < 4; i++) {

    blocks[i] = new Block(x1, y1, w, 20);
    x1 += 190;
  }
  
  //CREATING BLOCKS
  x1 = 300;
  y1 = 330;
  for (i = 3; i < 6; i++) {
    blocks[i] = new Block(x1, y1, w, 20);
    blocks[i].dir *= -1;
    x1 += 220;
  }
}



function level2() {
  var x = 25;
  var y = 90;
  for (var i = 0; i < 32; i++) {
    aliens[i] = new Alien(x, y, 15, 1);
    x += 50;
    if (i == 11) {
      x = 125;
      y = 140;
    }
    if (i == 19) {
      x = 25;
      y = 190;
    }
  }
  
  //CREATING BLOCKS
  x1 = 80;
  y1 = 290;
  let w = random(60, 70);
  for (let i = 0; i < 4; i++) {
    blocks[i] = new Block(x1, y1, w, 20);
    x1 += 170;
  }
}

function level1() {
  var x = 25;
  var y = 80;
  aliens.splice(0, aliens.length);
  for (var i = 0; i < 24; i++) {
    aliens[i] = new Alien(x, y, 15, 1);
    x += 60;
    if (i == 11) {
      x = 25;
      y = 140;
    }
  }
  
  //CREATING BLOCKS
  x1 = 100;
  y1 = 290;
  for (let i = 0; i < 3; i++) {
    let w = random(60, 80);
    blocks[i] = new Block(x1, y1, w, 20);
    blocks[i].vel+=1;
    x1 += 200;
  }
  blocks.splice(3, 3);
}

function lvlSetup() {
  if (level == 1 && !start) {
    noStroke();
    fill(0, 250, 0);
    textSize(25);
    textStyle(BOLD);
    text('LEVEL 1', width/2, 40);
  } else if (level == 2 && !start) {
    fill(250, 250, 0);
    textSize(25);
    textStyle(BOLD);
    text('LEVEL 2', width/2, 40);
  } else if (level == 3 && !start) {
    noStroke();
    fill(255, 0, 10);
    textSize(25);
    textStyle(BOLD);
    text('LEVEL 3', width/2-100, 40);
  }

  if (!start) {
    ship.show();
    fill(255);
    textSize(10);
    textFont('cursive');
    text('ARROW KEYS -> MOVE', 10, 10);
    text('SPACEBAR -> SHOOT', 10, 20);
  }
}

function finish() {
  if (aliens.length == 0) {
    // win.playMode('untilDone');
    // win.play();
    lasers.splice(0, lasers.length);
    start = true;
    for (let o = 0; o < bullets.length; o++) {
      bullets[o].dead = true;
    }

    fill(0, 255, 0);
    textSize(40);
    textFont(BOLD);
    text('YOU WIN!', width / 2 - 90, height / 2 - 30);
    if (level < 3) {
      textSize(20);
      fill(0, 255, 0);
      text('press ENTER for next LEVEL',
        width / 2 - 130, height / 2);
    } else if (level == 3) {
      fill(255);
      noStroke();
      text('Final Score: ' + score, width / 2 - 130, height / 2 +
        40);
      textSize(20);
      text('press ENTER to START OVER',
        width / 2 - 130, height / 2);

    fill(255);
    noStroke();
    textSize(14);
    text("Score: " + score, 750, 30);
    }
  }
}



function gameOver() {
  background(img2);
  textSize(40);
  fill(255, 0, 0);
  text('You Lose :(', width / 2 - 100, height / 2);
  textSize(30);
  fill(255);
  text('Final Score: ' + score, width / 2 - 100, height / 2 + 80);
  fill(255, 0, 0);
  textSize(20);
  text('Press ENTER to restart', width / 2 - 105, height / 2 + 40);
  start = false;
  level = -1;
  score = 0;
}