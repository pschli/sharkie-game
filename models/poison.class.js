class Poison extends Display {
  x = 30;
  y = 60;
  width = 160;
  height = 50;

  IMAGES = [
    "img/4_ Marcadores/orange/0_copia_p.png",
    "img/4_ Marcadores/orange/20_copia_p.png",
    "img/4_ Marcadores/orange/40_copia_p.png",
    "img/4_ Marcadores/orange/60_copia_p.png",
    "img/4_ Marcadores/orange/80_copia_p.png",
  ];

  constructor() {
    super().loadImage("img/4_ Marcadores/orange/100_copia_l.png");
    this.loadImages(this.IMAGES);
    this.setValue(0);
  }
}
