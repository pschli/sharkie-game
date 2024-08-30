class World {
  character = new Character();
  level = level1;
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
    this.checkCollisions();
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.getHitByEnemy(enemy);
        }
      });
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.drawMiddleground();
    this.drawForeground();

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  drawBackground() {
    this.ctx.translate(this.offset / 5, 0);
    this.addObjectsToMap(this.level.background);
    this.ctx.translate(-(this.offset / 5), 0);
  }

  drawMiddleground() {
    this.ctx.translate(this.offset / 3, 0);
    this.addObjectsToMap(this.level.middleground);
    this.ctx.translate(-(this.offset / 3), 0);
  }

  drawForeground() {
    this.ctx.translate(this.offset, 0);
    this.addObjectsToMap(this.level.foreground);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.ctx.translate(-this.offset, 0);
  }

  addToMap(sprite) {
    if (sprite.otherDirection) {
      this.flipImage(sprite);
    }
    sprite.drawSprite(this.ctx);
    //  sprite.drawFrame(this.ctx);

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

  returnCanvas() {
    return this.canvas;
  }
}
