class World {
  character = new Character();
  gameValues = [new Life(), new Poison(), new Money()];
  level = level1;
  endReached = false;
  bubbles = [];
  endBoss = new Boss();
  music = new Audio("audio/mixkit-epical-drums-05-680.mp3");
  noMusic;
  ctx;
  canvas;
  keyboard;
  offset = 0;

  constructor(canvas, keyboard, noMusic = false) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx.font = "50px LuckiestGuy";
    this.ctx.textAlign = "end";
    this.noMusic = noMusic;
    this.music.loop = true;
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkObsolete();
    this.checkEndArea();
    this.playMusic();
  }

  playMusic() {
    if (!this.noMusic) this.music.play();
  }

  checkObsolete() {
    setInterval(() => {
      for (let i = 0; i < this.level.enemies.length; i++) {
        if (this.level.enemies[i].y < -200) {
          this.level.enemies.splice(i, 1);
          console.log("enemy deleted");
        }
      }
      for (let i = 0; i < this.bubbles.length; i++) {
        if (this.bubbles[i].y < -200) {
          this.bubbles.splice(i, 1);
          console.log("bubble deleted");
        }
      }
      for (let i = 0; i < this.level.collectables.length; i++) {
        if (this.level.collectables[i].y < -200) {
          this.level.collectables.splice(i, 1);
          console.log("collectable deleted");
        }
      }
    }, 500);
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.getHitByEnemy(enemy);
        }
      });
    }, 50);
  }

  checkEndArea() {
    let endInterval = setInterval(() => {
      if (
        this.endReached === false &&
        this.character.x > this.level.level_end_x - 50 &&
        this.endBoss.engaged === false
      ) {
        this.endBoss.engage();
        this.endReached = true;
      }
    }, 500);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.drawMiddleground();
    this.drawForeground();
    this.drawValues();
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
    this.addObjectsToMap(this.level.collectables);
    this.addToMap(this.character);
    this.addToMap(this.endBoss);
    this.addObjectsToMap(this.bubbles);
    this.ctx.translate(-this.offset, 0);
  }

  drawValues() {
    this.addObjectsToMap(this.gameValues);
    this.ctx.fillText(`${this.character.coins}`, 870, 63);
  }

  addToMap(sprite) {
    if (sprite.otherDirection) {
      this.flipImage(sprite);
    }
    sprite.drawSprite(this.ctx);
    //   sprite.drawFrame(this.ctx);

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
