class Sprite {
  x;
  y;
  img;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveLeft() {
    console.log("sprite moved left");
  }

  moveRight() {
    console.log("sprite moved left");
  }

  moveUp() {
    console.log("sprite moved left");
  }

  moveDown() {
    console.log("sprite moved left");
  }
}
