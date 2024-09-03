class Display {
  x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};
  currentImage = 0;

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

  drawSprite(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  setValue(value) {
    if (value < 90) this.img = this.imageCache[this.IMAGES[4]];
    if (value < 70) this.img = this.imageCache[this.IMAGES[3]];
    if (value < 50) this.img = this.imageCache[this.IMAGES[2]];
    if (value < 30) this.img = this.imageCache[this.IMAGES[1]];
    if (value < 10) this.img = this.imageCache[this.IMAGES[0]];
  }
}
