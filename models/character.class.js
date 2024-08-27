class Character extends Sprite {
  x = 100;
  y = 100;

  constructor() {
    super().loadImage("img/1_Sharkie/3_Swim/1.png");
    this.height = 300;
    this.width = this.height * this.ar;
  }
  attack() {}
}
