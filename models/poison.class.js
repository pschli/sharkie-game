class Poison extends Display {
  x = 30;
  y = 60;
  width = 160;
  height = 50;

  IMAGES = [
    "img/4_ Marcadores/green/poisoned_bubbles/0_copi.png",
    "img/4_ Marcadores/green/poisoned_bubbles/20_copi.png",
    "img/4_ Marcadores/green/poisoned_bubbles/40_copi.png",
    "img/4_ Marcadores/green/poisoned_bubbles/60_copi.png",
    "img/4_ Marcadores/green/poisoned_bubbles/80_copi.png",
    "img/4_ Marcadores/green/poisoned_bubbles/100_copi.png",
  ];

  constructor() {
    super().loadImage("img/4_ Marcadores/green/poisoned_bubbles/0_copi.png");
    this.loadImages(this.IMAGES);
    this.setValue(0);
  }
}
