class Sprite {
  x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
    this.getAspectRatio();
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  getAspectRatio() {
    this.ar = this.img.width / this.img.height;
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
