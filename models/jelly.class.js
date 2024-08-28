class Jelly extends Sprite {
  x = canvas.width + Math.floor(Math.random() * 200);
  y = 300;
  height = 100;
  variant = Math.floor(Math.random() * 4);
  currentImage = 0;
  ar = 0.7;

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
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/green/g4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Lila/L4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Pink/P4.png",
    ],
    [
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y1.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y2.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y3.png",
      "../img/2_Enemy/2_Jelly_fish/Dead/Yellow/y4.png",
    ],
  ];

  constructor() {
    super().loadImage(this.IMAGES_MOVING[this.variant][0]);
    this.width = this.height * this.ar;
    this.loadImages(this.IMAGES_MOVING[this.variant]);
    this.speed = 0.5 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    this.moveLeft();
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_MOVING[this.variant].length;
      let path = this.IMAGES_MOVING[this.variant][i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }
}
