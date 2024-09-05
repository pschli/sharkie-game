class Coin extends Sprite {
  x = 100;
  y = 50 + Math.floor(Math.random() * 400);
  width = 50;
  height = 60;
  collision_inset_top = 0;
  collision_inset_bottom = 0;
  collision_inset_left = 0;
  collision_inset_right = 0;
  checkInterval;
  animationInterval;

  IMAGES = [
    "img/4_ Marcadores/1_Coins/1.png",
    "img/4_ Marcadores/1_Coins/2.png",
    "img/4_ Marcadores/1_Coins/3.png",
    "img/4_ Marcadores/1_Coins/4.png",
  ];
  constructor(x) {
    super().loadImage("img/4_ Marcadores/1_Coins/1.png");
    this.loadImages(this.IMAGES);
    this.x = x;
    this.animate();
    this.checkCollect();
  }

  animate() {
    this.animationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 200);
  }

  checkCollect() {
    this.checkInterval = setInterval(() => {
      if (this.isColliding(world.character)) {
        world.character.collectCoin();
        this.removeCoin();
      }
    }, 200);
  }

  removeCoin() {
    clearInterval(this.checkInterval);
    clearInterval(this.animationInterval);
    this.y = -300;
  }
}
