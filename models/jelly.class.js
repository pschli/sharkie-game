class Jelly extends Sprite {
  x = 720;
  y = 100 + Math.floor(Math.random() * 300);
  height = 100;
  collision_inset_top = 10;
  collision_inset_bottom = 20;
  collision_inset_left = 5;
  collision_inset_right = 10;
  variant = Math.floor(Math.random() * 4);
  currentImage = 0;
  ar = 0.7;
  dead = false;

  IMAGES_MOVING = [
    [
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila1.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila2.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila3.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Yellow1.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Yellow2.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Yellow3.png",
      "../img/2_Enemy/2_Jelly_fish/Regular_damage/Yellow4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Green1.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Green2.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Green3.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Green4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Pink1.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Pink2.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Pink3.png",
      "../img/2_Enemy/2_Jelly_fish/Super_dangerous/Pink4.png",
    ],
  ];

  IMAGES_DEAD = [
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g4.png",
    ],

    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P4.png",
    ],
  ];

  constructor(distance) {
    super().loadImage(this.IMAGES_MOVING[this.variant][0]);
    this.x += distance;
    this.width = this.height * this.ar;
    this.loadImages(this.IMAGES_MOVING[this.variant]);
    this.loadImages(this.IMAGES_DEAD[this.variant]);
    this.speed = 0.5 + Math.random() * 0.5;
    this.speed_x = this.speed;
    this.speed_y = this.speed;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.dead) {
        this.moveLeft();
      } else this.moveUp();
    }, 1000 / 60);
    setInterval(() => {
      if (!this.dead) {
        this.playAnimation(this.IMAGES_MOVING[this.variant]);
      } else this.playAnimation(this.IMAGES_DEAD[this.variant]);
    }, 150);
  }
}
