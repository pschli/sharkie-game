class Bubble extends Sprite {
  x;
  y;
  collision_inset_top = 0;
  collision_inset_bottom = 0;
  collision_inset_left = 0;
  collision_inset_right = 0;
  ar = 1;
  speed_x = 20;
  waterResistance = 0.7;
  speed_y = 0;

  constructor(x, y, otherDirection) {
    super().loadImage("../img/1_Sharkie/4_Attack/Bubble_trap/Bubble.png");
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
    setInterval(() => {
      world.level.enemies.forEach((enemy) => {
        if (this.isColliding(enemy)) {
          console.log("bubble hit:", enemy);
        }
      });
    }, 200);
  }

  isInBubble(sprite) {}

  animate() {
    setInterval(() => {
      if (!this.otherDirection) {
        this.moveRight();
      } else {
        this.moveLeft();
      }
      this.speed_x = this.speed_x - this.waterResistance;
      if (this.speed_x < 3) {
        this.speed_x = 0;
        this.speed_y = 2;
        this.waterResistance = 0.1;
        if (this.speed_x < 0.5) this.waterResistance = 0;
        this.moveUp();
      }
    }, 1000 / 60);
  }
}
