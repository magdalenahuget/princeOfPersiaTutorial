function level1() {
  moveUp();
  moveUp();
  moveRight();
  moveRight();
  moveDown();
  moveDown();
  moveRight();
  moveDown();
  moveDown();
  moveDown();
  moveLeft();
  moveLeft();
  moveLeft();
  moveUp();
};

function level2() {
  moveDirection("up");
  moveDirection("up");
  moveDirection("right");
  moveDirection("right");
  moveDirection("down");
  moveDirection("down");
  moveDirection("right");
  moveDirection("right");
  moveDirection("down");
  moveDirection("down");
  moveDirection("down");
  moveDirection("down");
  moveDirection("left");
  moveDirection("left");
  moveDirection("up");
  moveDirection("up");
  moveDirection("left");
  moveDirection("left");
  moveDirection("down");
};

function level3() {
  for (let step = 0; step < 8; step++) {
    moveDirection("down")
  }
};

function level4Before() {
  for (let step = 0; step < 6; step++) {
    moveDirection("down")
    moveDirection("right")
  }
};

function level4() {
  for (let turn = 0; turn < 12; turn++) {
    if (turn % 2 === 0) {
      moveDirection("down")
    } else {
      moveDirection("right")
    }
  }
};

function level5() {
  for (let step = 0; step < 3; step++) {
    moveDirection("down")
  }
  giveComputerAnswer();
  moveDirection("down");
  moveDirection("down");
};

function giveComputerAnswer(a, b) {
  let result = Math.floor(Math.pow(a, 4) / (a + b))
  return result
};


// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "level1", content: level1, type: "function" },
    { name: "level2", content: level2, type: "function" },
    { name: "level3", content: level3, type: "function" },
    { name: "level4", content: level4, type: "function" },
    { name: "level5", content: level5, type: "function" },
    { name: "giveComputerAnswer", content: giveComputerAnswer, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };