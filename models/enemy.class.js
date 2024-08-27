class Enemy extends Sprite {
  x = 500;
  y = 100;

  constructor(image) {
    super().loadImage(image);
    this.height = 100;
    this.width = this.height * this.ar;
  }
}
