class Jelly extends Sprite {
  x = 500;
  y = 100;
  variant;
  currentImage = 0;

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

  constructor(image) {
    super().loadImage(image);
    this.height = 100;
    this.width = this.height * this.ar;
    this.variant = Math.floor(Math.random() * 4);
    this.loadImages(this.IMAGES_MOVING[this.variant]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_MOVING[this.variant].length;
      let path = this.IMAGES_MOVING[this.variant][i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }
}
