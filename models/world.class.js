class World {
  character = new Character();
  background = [
    new Background("img/3_Background/Layers/3_Fondo_1/D1.png", canvas.height),
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
