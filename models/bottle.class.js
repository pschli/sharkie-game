class Bottle extends Sprite {
  x = 300;
  y = 400;
  width = 50;
  height = 60;
  collision_inset_top = 0;
  collision_inset_bottom = 0;
  collision_inset_left = 0;
  collision_inset_right = 0;
  checkInterval;
  animationInterval;

  IMAGES = [
    "img/4_ Marcadores/poison/animada/1.png",
    "img/4_ Marcadores/poison/animada/2.png",
    "img/4_ Marcadores/poison/animada/3.png",
    "img/4_ Marcadores/poison/animada/4.png",
    "img/4_ Marcadores/poison/animada/5.png",
    "img/4_ Marcadores/poison/animada/6.png",
    "img/4_ Marcadores/poison/animada/7.png",
    "img/4_ Marcadores/poison/animada/8.png",
  ];

  constructor(x) {
    super().loadImage("img/4_ Marcadores/poison/animada/1.png");
    this.loadImages(this.IMAGES);
    this.x = x;
    this.animate();
    this.checkCollect();
  }

  animate() {
    this.animationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 200);
    allIntervals.push(this.animationInterval);
  }

  checkCollect() {
    this.checkInterval = setInterval(() => {
      if (this.isColliding(world.character)) {
        world.character.collectBottle();
        this.removeBottle();
      }
    }, 200);
    allIntervals.push(this.checkInterval);
  }

  removeBottle() {
    clearInterval(this.checkInterval);
    clearInterval(this.animationInterval);
    this.y = -300;
  }
}
