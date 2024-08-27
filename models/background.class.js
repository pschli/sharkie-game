class Background extends Sprite {
  x = 0;
  y = 0;

  constructor(imagePath, height) {
    super().loadImage(imagePath);
    this.height = height;
    this.width = this.height * this.ar;
  }
}
