class Background extends Sprite {
  x = 0;
  y = 0;
  height;
  ar = 1920 / 1080;

  constructor(imagePath, x, height) {
    super().loadImage(imagePath);
    this.x = x;
    this.height = height;
    this.getAspectRatio();
    this.width = this.height * this.ar;
  }

  getAspectRatio() {
    this.ar = this.img.naturalWidth / this.img.naturalHeight;
  }
}
