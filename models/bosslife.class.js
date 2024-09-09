class Bosslife extends Display {
  x = 530;
  y = 10;
  width = 200;
  height = 50;

  IMAGES = [
    "img/2_Enemy/3_Final_Enemy/health/boss_at_00.png",
    "img/2_Enemy/3_Final_Enemy/health/boss_at_20.png",
    "img/2_Enemy/3_Final_Enemy/health/boss_at_40.png",
    "img/2_Enemy/3_Final_Enemy/health/boss_at_60.png",
    "img/2_Enemy/3_Final_Enemy/health/boss_at_80.png",
    "img/2_Enemy/3_Final_Enemy/health/boss_at_100.png",
  ];

  constructor() {
    super().loadImage("./img/2_Enemy/3_Final_Enemy/health/boss_at_100.png");
    this.loadImages(this.IMAGES);
    this.setValue(100);
  }
}
