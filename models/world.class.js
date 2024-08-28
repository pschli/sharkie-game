class World {
  character = new Character();
  background = level1.background;
  enemies = level1.enemies;
  ctx;
  canvas;
  keyboard;
  offset = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.offset, 0);
    this.addObjectsToMap(this.background);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);
    this.ctx.translate(-this.offset, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(sprite) {
    if (sprite.otherDirection) {
      this.flipImage(sprite);
    }
    this.ctx.drawImage(
      sprite.img,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height
    );
    if (sprite.otherDirection) {
      this.flipImageBack(sprite);
    }
  }

  flipImage(sprite) {
    this.ctx.save();
    this.ctx.translate(sprite.width, 0);
    this.ctx.scale(-1, 1);
    sprite.x = sprite.x * -1;
  }

  flipImageBack(sprite) {
    this.ctx.restore();
    sprite.x = sprite.x * -1;
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
