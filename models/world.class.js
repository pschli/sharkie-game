class World {
  character = new Character();
  gameValues = [new Life(), new Poison(), new Money()];
  level = level1;
  endReached = false;
  bubbles = [];
  endBoss = new Boss();
  soundsOn;
  ctx;
  canvas;
  keyboard;
  offset = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx.font = "50px LuckiestGuy";
    this.ctx.textAlign = "end";
    this.draw();
    this.setWorld();
    this.checkCollisions();
    this.checkObsolete();
    this.checkEndArea();
  }

  /**
   * removes objects no longer needed
   */
  checkObsolete() {
    let intervalId = setInterval(() => {
      for (let i = 0; i < this.level.enemies.length; i++) {
        if (this.level.enemies[i].y < -200) {
          this.level.enemies.splice(i, 1);
        }
      }
      for (let i = 0; i < this.bubbles.length; i++) {
        if (this.bubbles[i].y < -200) {
          this.bubbles.splice(i, 1);
        }
      }
      for (let i = 0; i < this.level.collectables.length; i++) {
        if (this.level.collectables[i].y < -200) {
          this.level.collectables.splice(i, 1);
        }
      }
    }, 500);
    allIntervals.push(intervalId);
  }

  /**
   * checks for collisions between character and enemies
   */
  checkCollisions() {
    let intervalId = setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.getHitByEnemy(enemy);
        }
      });
    }, 50);
    allIntervals.push(intervalId);
  }

  /**
   * checks for collisions between character and boss
   */
  checkEndbossCollisions() {
    let intervalId = setInterval(() => {
      if (this.character.isColliding(this.endBoss)) {
        this.character.getHitByEnemy(this.endBoss);
      }
    }, 50);
    allIntervals.push(intervalId);
  }

  /**
   * checks if end area has been reached
   */
  checkEndArea() {
    let endInterval = setInterval(() => {
      if (
        this.endReached === false &&
        this.character.x > this.level.level_end_x - 150 &&
        this.endBoss.engaged === false
      ) {
        this.endReached = true;
        this.endBoss.engage();
        this.checkEndbossCollisions();
      }
    }, 500);
    allIntervals.push(endInterval);
  }

  /**
   * draw game objects on canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.drawMiddleground();
    this.drawForeground();
    this.drawValues();
    let self = this;
    animationFrame = requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * draw background elements with 1/5th offset
   */
  drawBackground() {
    this.ctx.translate(this.offset / 5, 0);
    this.addObjectsToMap(this.level.background);
    this.ctx.translate(-(this.offset / 5), 0);
  }

  /**
   * draw middleground elements with 1/3rd offset
   */
  drawMiddleground() {
    this.ctx.translate(this.offset / 3, 0);
    this.addObjectsToMap(this.level.middleground);
    this.ctx.translate(-(this.offset / 3), 0);
  }

  /**
   * draw foreground with full offset
   */
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

  /**
   * draw static elements
   */
  drawValues() {
    this.addObjectsToMap(this.gameValues);
    this.ctx.fillText(`${this.character.coins}`, 870, 63);
  }

  /**
   * actual drawing
   * @param {Object} sprite object to draw
   */
  addToMap(sprite) {
    if (sprite.otherDirection) {
      this.flipImage(sprite);
    }
    sprite.drawSprite(this.ctx);

    if (sprite.otherDirection) {
      this.flipImageBack(sprite);
    }
  }

  /**
   * adjust image direction
   * @param {Object} sprite
   */
  flipImage(sprite) {
    this.ctx.save();
    this.ctx.translate(sprite.width, 0);
    this.ctx.scale(-1, 1);
    sprite.x = sprite.x * -1;
  }

  /**
   * adjust image direction
   * @param {Object} sprite
   */
  flipImageBack(sprite) {
    this.ctx.restore();
    sprite.x = sprite.x * -1;
  }

  /**
   * iterating through elements to draw
   * @param {Array} objects
   */
  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * handing word to the character Object
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * accessing the canvas Element from outside the Object
   * @returns canvas Element
   */
  returnCanvas() {
    return this.canvas;
  }
}
