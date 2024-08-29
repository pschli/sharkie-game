let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  initLevels(canvas);
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") keyboard.UP = true;
  if (e.code === "ArrowDown") keyboard.DOWN = true;
  if (e.code === "ArrowLeft") keyboard.LEFT = true;
  if (e.code === "ArrowRight") keyboard.RIGHT = true;
  if (e.code === "Space") {
    keyboard.ATTACK = true;
    world.character.currentImage = 0;
  }
  if (e.code === "d") keyboard.BUBBLE = true;
  if (e.code === "Escape") keyboard.EXIT = true;
});

window.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") keyboard.UP = false;
  if (e.code === "ArrowDown") keyboard.DOWN = false;
  if (e.code === "ArrowLeft") keyboard.LEFT = false;
  if (e.code === "ArrowRight") keyboard.RIGHT = false;
  if (e.code === "Escape") keyboard.EXIT = false;
});
