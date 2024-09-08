class Background extends Sprite {
  x = 0;
  y = 0;
  height;
  ar = 1920 / 1080;

  constructor(imagePath, x, height) {
    super().loadImage(imagePath);
    this.x = x;
    this.height = height;
    this.width = this.height * this.ar;
  }
}
