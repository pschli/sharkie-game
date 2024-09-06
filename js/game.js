let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let music = new Music(true);
let allIntervals = [];
let animationFrame;
let overlay;

function init() {
  toggleGameKeyListeners("on");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  overlay = document.getElementById("overlay");
  initLevels(canvas);
  world = new World(canvas, keyboard);
}

function gameOverHelper(win) {
  toggleGameKeyListeners("off");
  gameOver(win);
  setTimeout(() => {
    gameOver(win);
    displayRestartButton();
  }, 200);
}

function gameOver(win) {
  stopIntervals();
  cancelAnimationFrame(animationFrame);
  world = {};
  setTimeout(() => {
    if (win) {
      showSplashWin();
    } else {
      showSplashLoose();
    }
  }, 200);
}

function showSplashStart() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

function showSplashWin() {
  let img = new Image();
  img.src = "../img/6_Botones/Titles/You win/Mesa de trabajo 1.png";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function showSplashLoose() {}

function displayRestartButton() {
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      restartGame();
    }
  });
  overlay.innerHTML = `<button id="restart" onclick="restartGame()">Restart</button><br>
  <h3>or Press Space to restart</h3>`;
}

function restartGame() {
  window.removeEventListener("keydown", (e) => {
    if (e.code === "Space") {
      restartGame();
    }
  });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";
  console.log("Restart");
}

function stopIntervals() {
  allIntervals.forEach((interval) => {
    clearInterval(interval);
  });
  allIntervals = [];
}

function handleKeyDownWrapper(e) {
  handleKeyDown(e);
}

function handleKeyUpWrapper(e) {
  handleKeyUp(e);
}

function toggleGameKeyListeners(state) {
  if (state === "on") {
    window.addEventListener("keydown", handleKeyDownWrapper);
    window.addEventListener("keyup", handleKeyUpWrapper);
  } else {
    window.removeEventListener("keydown", handleKeyDownWrapper);
    window.removeEventListener("keyup", handleKeyUpWrapper);
  }
}

function handleKeyDown(e) {
  if (e.code === "KeyM") music.toggleMusic();
  if (e.code === "KeyN") music.toggleSound();
  if (e.code === "ArrowUp") keyboard.UP = true;
  if (e.code === "ArrowDown") keyboard.DOWN = true;
  if (e.code === "ArrowLeft") keyboard.LEFT = true;
  if (e.code === "ArrowRight") keyboard.RIGHT = true;
  if (e.code === "Space") {
    keyboard.ATTACK = true;
    world.character.currentImage = 0;
  }
  if (e.code === "KeyD") {
    keyboard.BUBBLE = true;
    world.character.currentImage = 0;
  }
  if (e.code === "Escape") keyboard.EXIT = true;
}

function handleKeyUp(e) {
  if (e.code === "ArrowUp") keyboard.UP = false;
  if (e.code === "ArrowDown") keyboard.DOWN = false;
  if (e.code === "ArrowLeft") keyboard.LEFT = false;
  if (e.code === "ArrowRight") keyboard.RIGHT = false;
  if (e.code === "Escape") keyboard.EXIT = false;
}
