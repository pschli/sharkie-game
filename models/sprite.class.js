class Sprite {
  x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};
  speed = 0.15;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
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
