let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let music = new Music(true);
let allIntervals = [];
let animationFrame;
let overlay;
let startImg = new Image();
startImg.src = "../img/6_Botones/startsplash.png";
let winImg = new Image();
winImg.src = "../img/6_Botones/Titles/You win/Mesa de trabajo 1.png";
let looseImg = new Image();
looseImg.src = "../img/6_Botones/Titles/Game Over/Recurso 9.png";

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  overlay = document.getElementById("overlay");
  showSplashStartHelper();
}

function startGame() {
  window.removeEventListener("keydown", startListener);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";
  toggleGameKeyListeners("on");
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

function showSplashStartHelper() {
  showSplashStart();
  setTimeout(() => {
    showSplashStart();
  }, 500);
}

function showSplashStart() {
  ctx.drawImage(startImg, 0, 0, canvas.width, canvas.height);
  displayStartButton();
}

function showSplashWin() {
  ctx.drawImage(winImg, 0, 0, canvas.width, canvas.height);
}

function showSplashLoose() {
  ctx.drawImage(looseImg, 100, 200, canvas.width - 200, canvas.height - 300);
}

function displayRestartButton() {
  window.addEventListener("keydown", restartListener);
  overlay.innerHTML = `<button id="restart" onclick="restartGame()">Restart</button><br>
  <h3>or Press Space to restart</h3>`;
}

function displayStartButton() {
  window.addEventListener("keydown", startListener);
  overlay.innerHTML = `<button id="restart" onclick="startGame()">Start</button><br>
  <h3>or Press Space to start</h3>`;
}

function restartGame() {
  window.removeEventListener("keydown", restartListener);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";
  showSplashStart();
}

function startListener(e) {
  if (e.code === "Space") startGame();
  if (e.code === "KeyM") music.toggleMusic();
  if (e.code === "KeyN") music.toggleSound();
}

function restartListener(e) {
  if (e.code === "Space") {
    restartGame();
  }
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
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  } else {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
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
