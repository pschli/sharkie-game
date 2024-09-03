class Bubble extends Sprite {
  x;
  y;
  collision_inset_top = 0;
  collision_inset_bottom = 0;
  collision_inset_left = 0;
  collision_inset_right = 0;
  ar = 1;
  speed_x = 12;
  waterResistance = 0.3;
  speed_y = 0;
  hitInterval;

  IMAGES_POP = [
    "../img/1_Sharkie/4_Attack/Bubble_trap/Bubble_pop1.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/Bubble_pop2.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/Bubble_pop3.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/Bubble_pop4.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/Bubble_pop5.png",
  ];

  constructor(x, y, otherDirection) {
    super().loadImage("../img/1_Sharkie/4_Attack/Bubble_trap/Bubble.png");
    this.loadImages(this.IMAGES_POP);
    this.otherDirection = otherDirection;
    this.height = 80;
    this.width = this.height * this.ar;
    if (!this.otherDirection) {
      this.x = x + 230;
    } else this.x = x - 50;
    this.y = y + 150;
    this.animate();
    this.hitTarget();
  }

  hitTarget() {
    this.hitInterval = setInterval(() => {
      world.level.enemies.forEach((enemy) => {
        if (this.isColliding(enemy)) {
          if (enemy.constructor.name === "Pufferfish") this.popBubble();
          else if (enemy.constructor.name === "Jelly")
            this.bubbleTrapEnemy(enemy);
        }
      });
    }, 30);
  }

  popBubble() {
    clearInterval(this.hitInterval);
    this.speed_x = 0;
    this.currentImage = 0;
    setInterval(() => {
      this.playAnimation(this.IMAGES_POP);
      if (this.currentImage === this.IMAGES_POP.length - 1)
        this.terminateBubble();
    }, 20);
  }

  bubbleTrapEnemy(enemy) {
    clearInterval(this.hitInterval);
    this.terminateBubble();
    enemy.dead = true;
  }

  terminateBubble() {
    let index = world.bubbles.findIndex((bubble) => {
      this === bubble;
    });
    let trashBubble = world.bubbles.splice(index, 1);
    trashBubble = null;
  }

  animate() {
    setInterval(() => {
      if (!this.otherDirection) {
        this.moveRight();
      } else {
        this.moveLeft();
      }
      this.speed_x = this.speed_x - this.waterResistance;
      if (this.speed_x < 0.5) {
        this.speed_x = 0;
        this.speed_y = 1;
        this.waterResistance = 0.1;
        if (this.speed_x < 0.1) this.waterResistance = 0;
        this.moveUp();
      }
    }, 1000 / 60);
  }
}
