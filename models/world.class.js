class World {
  character = new Character();
  background = [
    new Background("../img/3_Background/Layers/5_Water/D1.png", canvas.height),
    new Background(
      "../img/3_Background/Layers/4_Fondo_2/D1.png",
      canvas.height
    ),
    new Background(
      "../img/3_Background/Layers/3_Fondo_1/D1.png",
      canvas.height
    ),
    new Background("../img/3_Background/Layers/2_Floor/D1.png", canvas.height),
  ];
  enemies = [
    new Puffer(
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim1.png"
    ),
  ];
  ctx;
  canvas;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(sprite) {
    this.ctx.drawImage(
      sprite.img,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height
    );
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }
}
