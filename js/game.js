let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let allIntervals = [];
let animationFrame;
let overlay;
let movebox;
let attackBubble;
let attackFin;
let setMusic;
let setSounds;
let touchCenterX;
let touchCenterY;
let hud;
let fullscreen = false;
let startImg = new Image();
startImg.src = "../img/6_Botones/startsplash.png";
let winImg = new Image();
winImg.src = "../img/6_Botones/Titles/You win/Mesa de trabajo 1.png";
let loseImg = new Image();
loseImg.src = "../img/6_Botones/Titles/Game Over/Recurso 9.png";
let music = new Music(true);

/**
 * initialize the page on load
 */
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  overlay = document.getElementById("overlay");
  hud = document.getElementById("hud");
  activateHud();
  showSplashStartHelper();
}

/**
 * starting the actual game
 */
async function startGame() {
  await initLevels(canvas);
  window.removeEventListener("keydown", startListener);
  hud.style = "";
  hud.style.zIndex = "20";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";
  toggleGameKeyListeners("on");
  world = new World(canvas, keyboard);
}

/**
 * handles the end of the game
 * @param {boolean} win states if the game has been won
 */
function gameOverHelper(win) {
  hud.style = "";
  hud.style.visibility = "hidden";
  toggleGameKeyListeners("off");
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  gameOver(win);
  setTimeout(() => {
    gameOver(win);
    displayRestartButton();
  }, 200);
}

/**
 * ends all game functions and intervals. Invokes the matching splashscreen
 * @param {boolean} win states if the game has been won
 */
function gameOver(win) {
  stopIntervals();
  cancelAnimationFrame(animationFrame);
  world = {};
  setTimeout(() => {
    if (win) {
      showSplashWin();
    } else {
      showSplashlose();
    }
  }, 200);
}

/**
 * invokes Start Screen
 */
function showSplashStartHelper() {
  hud.style.visibility = "hidden";
  showSplashStart();
  setTimeout(() => {
    showSplashStart();
  }, 500);
}

/**
 * draws Start Screen
 */
function showSplashStart() {
  ctx.drawImage(startImg, 0, 0, canvas.width, canvas.height);
  displayStartButton();
}

/**
 * draws Win Splash Screen
 */
function showSplashWin() {
  ctx.drawImage(winImg, 0, 0, canvas.width, canvas.height);
}

/**
 * draws lose Splash Screen
 */
function showSplashlose() {
  ctx.drawImage(loseImg, 100, 200, canvas.width - 200, canvas.height - 300);
}

/**
 * shows the restart button
 */
function displayRestartButton() {
  window.addEventListener("keydown", restartListener);
  overlay.innerHTML = `<button id="restart" onclick="restartGame()">Restart</button><br>
  <h3>or Press Space to restart</h3>`;
}

/**
 * shows the start button
 */
function displayStartButton() {
  window.addEventListener("keydown", startListener);
  overlay.innerHTML = `<button id="restart" onclick="startGame()">Start</button><br>
  <h3>or Press Space to start</h3>`;
}

/**
 * prepares the game for restart
 */
function restartGame() {
  window.removeEventListener("keydown", restartListener);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  overlay.innerHTML = "";
  showSplashStart();
}

/**
 * initializes event listeners for the start splash screen
 * @param {event} e keyboard event
 */
function startListener(e) {
  if (e.code === "Space") startGame();
  if (e.code === "KeyM") music.toggleMusic();
  if (e.code === "KeyN") music.toggleSound();
}

/**
 * initializes event listeners for the game over splash screen
 * @param {event} e keyboard event
 */
function restartListener(e) {
  if (e.code === "Space") {
    restartGame();
  }
}

/**
 * stops all intervals set during the game
 */
function stopIntervals() {
  allIntervals.forEach((interval) => {
    clearInterval(interval);
  });
  allIntervals = [];
}

/**
 * HUD overlay for mobile gaming
 */
function activateHud() {
  activateMoveArea();
  activateAttacks();
  activateSettings();
}

/**
 * HUD elements for sound settings
 */
function activateSettings() {
  setMusic = document.getElementById("music");
  setSounds = document.getElementById("sound");
  setMusic.addEventListener("touchstart", handleSetMusic);
  setSounds.addEventListener("touchstart", handleSetSounds);
}

/**
 * handles touch event for music setting element in HUD
 * @param {event} event touch event
 */
function handleSetMusic(event) {
  event.preventDefault();
  music.toggleMusic();
}

/**
 * handles touch event for sound setting element in HUD
 * @param {event} event touch event
 */
function handleSetSounds(event) {
  event.preventDefault();
  music.toggleSound();
}

/**
 * HUD elements for attacks
 */
function activateAttacks() {
  attackBubble = document.getElementById("bubbles");
  attackFin = document.getElementById("fin");
  attackBubble.addEventListener("touchstart", handleBubbleStart);
  attackFin.addEventListener("touchstart", handleFinStart);
}

/**
 * bubble attack on touch
 * @param {event} event touch event
 */
function handleBubbleStart(event) {
  event.preventDefault();
  keyboard.BUBBLE = true;
  world.character.currentImage = 0;
}

/**
 * fin attack on touch
 * @param {event} event touch event
 */
function handleFinStart(event) {
  event.preventDefault();
  keyboard.ATTACK = true;
  world.character.currentImage = 0;
}

/**
 * initializes the movement control for mobile gaming
 */
function activateMoveArea() {
  movebox = document.getElementById("movebox");
  movebox.addEventListener("touchstart", handleStart);
  movebox.addEventListener("touchend", handleEnd);
  movebox.addEventListener("touchmove", handleMove);
}

/**
 * gets and saves the starting coordinates of a touch in the movement area
 * @param {event} event touchstart
 */
function handleStart(event) {
  event.preventDefault();
  touchCenterX = event.changedTouches[0].screenX;
  touchCenterY = event.changedTouches[0].screenY;
}

/**
 * resets all movement variables
 * @param {event} event touchend
 */
function handleEnd(event) {
  event.preventDefault();
  keyboard.UP = false;
  keyboard.DOWN = false;
  keyboard.LEFT = false;
  keyboard.RIGHT = false;
}

/**
 * sets movement variables according to the delta between the current touch and the start
 * @param {event} event touchmove
 */
function handleMove(event) {
  event.preventDefault();
  let touchX = event.changedTouches[0].screenX - touchCenterX;
  let touchY = event.changedTouches[0].screenY - touchCenterY;
  if (touchY < -20) {
    keyboard.UP = true;
    keyboard.DOWN = false;
  }
  if (touchY > 20) {
    keyboard.UP = false;
    keyboard.DOWN = true;
  }
  if (touchY > -20 && touchY < 20) {
    keyboard.UP = false;
    keyboard.DOWN = false;
  }
  if (touchX < -20) {
    keyboard.LEFT = true;
    keyboard.RIGHT = false;
  }
  if (touchX > 20) {
    keyboard.LEFT = false;
    keyboard.RIGHT = true;
  }
  if (touchX > -20 && touchX < 20) {
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
  }
}

/**
 *
 * @param {string} state
 */
function toggleGameKeyListeners(state) {
  if (state === "on") {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  } else {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  }
}

/**
 * handles keyboard events during the game
 * @param {event} e keydown
 */
function handleKeyDown(e) {
  if (e.code === "KeyM") music.toggleMusic();
  if (e.code === "KeyN") music.toggleSound();
  if (e.code === "KeyV") toggleFullScreen();
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

/**
 * handles keyboard events during the game
 * @param {event} e keydown
 */
function handleKeyUp(e) {
  if (e.code === "ArrowUp") keyboard.UP = false;
  if (e.code === "ArrowDown") keyboard.DOWN = false;
  if (e.code === "ArrowLeft") keyboard.LEFT = false;
  if (e.code === "ArrowRight") keyboard.RIGHT = false;
  if (e.code === "Escape") keyboard.EXIT = false;
}

/**
 * toggles the canvas to fullscreen and back
 */
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen().catch((err) => {
      alert(`Fullscreen mode not available`);
    });
  } else {
    document.exitFullscreen();
  }
}
