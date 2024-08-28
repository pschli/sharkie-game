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
    new Pufferfish(
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim1.png"
    ),
    new Jelly("../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila1.png"),
  ];
  ctx;
  canvas;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
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
    if (sprite.otherDirection) {
      this.ctx.save();
      this.ctx.translate(sprite.width, 0);
      this.ctx.scale(-1, 1);
      sprite.x = sprite.x * -1;
    }
    this.ctx.drawImage(
      sprite.img,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height
    );
    if (sprite.otherDirection) {
      this.ctx.restore();
      sprite.x = sprite.x * -1;
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  setWorld() {
    this.character.world = this;
  }
}
