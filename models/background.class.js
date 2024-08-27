class Background extends Sprite {
  x = 0;
  y = 0;

  constructor(imagePath) {
    super().loadImage(imagePath);
    this.height = canvas.height;
    this.width = this.height * this.ar;
  }
}
