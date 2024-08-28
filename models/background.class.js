class Background extends Sprite {
  x = 0;
  y = 0;

  constructor(imagePath, height) {
    super().loadImage(imagePath);
    this.height = height;
    this.getAspectRatio();
    this.width = this.height * this.ar;
  }

  getAspectRatio() {
    this.ar = this.img.naturalWidth / this.img.naturalHeight;
  }
}
