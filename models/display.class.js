class Display {
  x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};
  currentImage = 0;

  /**
   * create new Image Object
   * @param {string} path
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * load array of Images and create Image Objects
   * @param {Array} arr
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * draw image on canvas
   * @param {CanvasRenderingContext2D} ctx
   */
  drawSprite(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * draw static elements according to value
   * @param {number} value
   */
  setValue(value) {
    if ((value) => 90) this.img = this.imageCache[this.IMAGES[5]];
    if (value < 90) this.img = this.imageCache[this.IMAGES[4]];
    if (value < 70) this.img = this.imageCache[this.IMAGES[3]];
    if (value < 50) this.img = this.imageCache[this.IMAGES[2]];
    if (value < 30) this.img = this.imageCache[this.IMAGES[1]];
    if (value < 10) this.img = this.imageCache[this.IMAGES[0]];
  }
}
