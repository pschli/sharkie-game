class Character extends Sprite {
  x = 50;
  y = 100;
  collision_inset_top = 150;
  collision_inset_bottom = 225;
  collision_inset_left = 50;
  collision_inset_right = 100;
  ar = 0.815;
  speed = 3;
  speed_x = this.speed;
  speed_y = this.speed;
  health = 100;
  poison = 0;
  poisonBubbles = false;
  coins = 0;
  lastHit = 0;
  state = "normal";
  isIdle = false;
  idleStart;
  longIdle = 0;
  death = "none";
  lose = false;
  painSound = new Audio("../audio/mixkit-ow-exclamation-of-pain-2204.wav");
  coinSound = new Audio("../audio/coin-recieved-230517.mp3");
  slapSound = new Audio("../audio/punch-41105.mp3");
  moveSound = new Audio("../audio/mixkit-fish-flapping-2457.mp3");
  snoreSound = new Audio("../audio/mixkit-man-strong-snore-2478.wav");
  shockDeathSound = new Audio(
    "../audio/mixkit-electricity-static-power-up-2600.wav"
  );
  poisonDeathSound = new Audio("../audio/man-death-scream-186763.mp3");
  world;

  IMAGES_MOVING = [
    "../img/1_Sharkie/3_Swim/1.png",
    "../img/1_Sharkie/3_Swim/2.png",
    "../img/1_Sharkie/3_Swim/3.png",
    "../img/1_Sharkie/3_Swim/4.png",
    "../img/1_Sharkie/3_Swim/5.png",
    "../img/1_Sharkie/3_Swim/6.png",
  ];

  IMAGES_IDLE = [
    "../img/1_Sharkie/1_IDLE/1.png",
    "../img/1_Sharkie/1_IDLE/2.png",
    "../img/1_Sharkie/1_IDLE/3.png",
    "../img/1_Sharkie/1_IDLE/4.png",
    "../img/1_Sharkie/1_IDLE/5.png",
    "../img/1_Sharkie/1_IDLE/6.png",
    "../img/1_Sharkie/1_IDLE/7.png",
    "../img/1_Sharkie/1_IDLE/8.png",
    "../img/1_Sharkie/1_IDLE/9.png",
    "../img/1_Sharkie/1_IDLE/10.png",
    "../img/1_Sharkie/1_IDLE/11.png",
    "../img/1_Sharkie/1_IDLE/12.png",
    "../img/1_Sharkie/1_IDLE/13.png",
    "../img/1_Sharkie/1_IDLE/14.png",
    "../img/1_Sharkie/1_IDLE/15.png",
    "../img/1_Sharkie/1_IDLE/16.png",
    "../img/1_Sharkie/1_IDLE/17.png",
    "../img/1_Sharkie/1_IDLE/18.png",
  ];

  IMAGES_LONG_IDLE = [
    "../img/1_Sharkie/2_Long_IDLE/l1.png",
    "../img/1_Sharkie/2_Long_IDLE/l2.png",
    "../img/1_Sharkie/2_Long_IDLE/l3.png",
    "../img/1_Sharkie/2_Long_IDLE/l4.png",
    "../img/1_Sharkie/2_Long_IDLE/l5.png",
    "../img/1_Sharkie/2_Long_IDLE/l6.png",
    "../img/1_Sharkie/2_Long_IDLE/l7.png",
    "../img/1_Sharkie/2_Long_IDLE/l8.png",
    "../img/1_Sharkie/2_Long_IDLE/l9.png",
    "../img/1_Sharkie/2_Long_IDLE/l10.png",
    "../img/1_Sharkie/2_Long_IDLE/l11.png",
    "../img/1_Sharkie/2_Long_IDLE/l12.png",
    "../img/1_Sharkie/2_Long_IDLE/l13.png",
    "../img/1_Sharkie/2_Long_IDLE/l14.png",
  ];

  IMAGES_ATTACK_BUBBLE = [
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/1.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/2.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/3.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/4.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/5.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/6.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/7.png",
    "../img/1_Sharkie/4_Attack/Bubble_trap/op1_(with_bubble_formation)/8.png",
  ];

  IMAGES_ATTACK_FIN = [
    "../img/1_Sharkie/4_Attack/Fin_slap/1.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/2.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/3.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/4.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/5.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/6.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/7.png",
    "../img/1_Sharkie/4_Attack/Fin_slap/8.png",
  ];

  IMAGES_POISONED = [
    "../img/1_Sharkie/5_Hurt/1_Poisoned/1.png",
    "../img/1_Sharkie/5_Hurt/1_Poisoned/2.png",
    "../img/1_Sharkie/5_Hurt/1_Poisoned/3.png",
    "../img/1_Sharkie/5_Hurt/1_Poisoned/4.png",
    "../img/1_Sharkie/5_Hurt/1_Poisoned/5.png",
  ];

  IMAGES_SHOCKED = [
    "../img/1_Sharkie/5_Hurt/2_Electric_shock/o1.png",
    "../img/1_Sharkie/5_Hurt/2_Electric_shock/o2.png",
  ];

  IMAGES_DEAD_POISON = [
    "../img/1_Sharkie/6_dead/1_Poisoned/1.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/2.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/3.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/4.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/5.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/6.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/7.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/8.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/9.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/10.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/11.png",
    "../img/1_Sharkie/6_dead/1_Poisoned/12.png",
  ];

  IMAGES_DEAD_SHOCK = [
    "../img/1_Sharkie/6_dead/2_Electro_shock/1.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/2.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/3.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/4.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/5.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/6.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/7.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/8.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/9.png",
    "../img/1_Sharkie/6_dead/2_Electro_shock/10.png",
  ];

  currentImage = 0;

  constructor() {
    super().loadImage("../img/1_Sharkie/3_Swim/1.png");
    this.height = 300;
    this.width = this.height * this.ar;
    this.loadImages(this.IMAGES_MOVING);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_ATTACK_FIN);
    this.loadImages(this.IMAGES_ATTACK_BUBBLE);
    this.loadImages(this.IMAGES_POISONED);
    this.loadImages(this.IMAGES_SHOCKED);
    this.loadImages(this.IMAGES_DEAD_POISON);
    this.loadImages(this.IMAGES_DEAD_SHOCK);
    this.animate();
  }

  /**
   * movement of character depending on death state
   */
  movement() {
    if (this.death === "none") {
      this.aliveMovement();
    } else if (
      this.death === "stay shocked" &&
      this.y < this.world.canvas.height - 300
    )
      this.moveDown();
    else if (this.death === "stay poisoned" && this.y > -100) this.moveUp();
  }

  /**
   * movement by user input
   */
  aliveMovement() {
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.otherDirection = false;
      this.moveRight();
    }
    if (this.world.keyboard.LEFT && this.x > 50) {
      this.otherDirection = true;
      this.moveLeft();
    }
    this.world.offset = -this.x + 50;
    if (this.world.keyboard.UP && this.y > -100) this.moveUp();
    if (this.world.keyboard.DOWN && this.y < this.world.canvas.height - 300)
      this.moveDown();
  }

  /**
   * animation and movement intervals
   */
  animate() {
    let intervalId = setInterval(() => {
      this.movement();
    }, 1000 / 60);

    let intervalId2 = setInterval(() => {
      this.animationFrames();
    }, 100);
    allIntervals.push(intervalId);
    allIntervals.push(intervalId2);
  }

  /**
   * animations depending on actions
   */
  animationFrames() {
    if (this.death != "none") {
      this.showDeath();
    } else if (this.state === "poisoned") {
      this.showPoisoned();
      this.isIdle = false;
    } else if (this.state === "shocked") {
      this.showShocked();
      this.isIdle = false;
    } else if (this.world.keyboard.ATTACK) {
      this.showFinAttack();
      this.isIdle = false;
    } else if (this.world.keyboard.BUBBLE) {
      this.showBubbleAttack();
      this.isIdle = false;
    } else if (this.characterMoves()) {
      this.playAnimation(this.IMAGES_MOVING);
      if (music.soundOn) this.moveSound.play();
      this.isIdle = false;
    } else if (this.isIdle && Date.now() - this.idleStart > 15000) {
      this.animateLongIdle();
    } else {
      this.animateIdle();
    }
  }

  /**
   * show idle animation
   */
  animateIdle() {
    this.playAnimation(this.IMAGES_IDLE);
    if (!this.isIdle) this.idleStart = Date.now();
    this.isIdle = true;
    this.longIdle = 0;
  }

  /**
   * show animation after 15 seconds idle
   */
  animateLongIdle() {
    if (music.soundOn) this.snoreSound.play();
    if (this.longIdle > 10) {
      this.currentImage = 8;
      this.longIdle = 6;
    }
    this.playAnimation(this.IMAGES_LONG_IDLE);
    this.longIdle++;
  }

  /**
   * checks if movement keys were pressed
   * @returns true / false
   */
  characterMoves() {
    return (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN
    );
  }

  /**
   * animates poison damage
   */
  showPoisoned() {
    this.playAnimation(this.IMAGES_POISONED);
    if (this.currentImage === this.IMAGES_POISONED.length) {
      this.state = "normal";
    }
  }

  /**
   * animates shock damage
   */
  showShocked() {
    this.playAnimation(this.IMAGES_SHOCKED);
    if (this.currentImage >= this.IMAGES_SHOCKED.length * 3) {
      this.state = "normal";
    }
  }

  /**
   * animates death sequences
   */
  showDeath() {
    if (this.death === "shocked") {
      this.showShockDeath();
    } else if (this.death === "poisoned") {
      this.showPoisonDeath();
    } else if (this.death === "stay poisoned") {
      this.currentImage = 11;
      this.playAnimation(this.IMAGES_DEAD_POISON);
    } else if (this.death === "stay shocked") {
      this.currentImage = 9;
      this.playAnimation(this.IMAGES_DEAD_SHOCK);
    }
    if (this.lose === false) {
      this.characterLoses();
    }
  }

  /**
   * shows death by electro shock
   */
  showShockDeath() {
    if (music.soundOn) this.shockDeathSound.play();
    this.playAnimation(this.IMAGES_DEAD_SHOCK);
    if (this.currentImage === this.IMAGES_DEAD_SHOCK.length) {
      this.death = "stay shocked";
    }
  }

  /**
   * shows death by poison
   */
  showPoisonDeath() {
    if (music.soundOn) this.poisonDeathSound.play();
    this.playAnimation(this.IMAGES_DEAD_POISON);
    if (this.currentImage === this.IMAGES_DEAD_POISON.length) {
      this.death = "stay poisoned";
    }
  }

  /**
   * end game after 2 seconds
   */
  characterLoses() {
    this.lose = true;
    setTimeout(() => {
      gameOverHelper(false);
    }, 2000);
  }

  /**
   * animate fin attack
   */
  showFinAttack() {
    this.collision_inset_right = 50;
    this.playAnimation(this.IMAGES_ATTACK_FIN);
    if (this.currentImage === this.IMAGES_ATTACK_FIN.length - 1) {
      keyboard.ATTACK = false;
      this.collision_inset_right = 100;
    }
  }

  /**
   * animate bubble attack
   */
  showBubbleAttack() {
    this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
    if (this.currentImage === this.IMAGES_ATTACK_BUBBLE.length - 1) {
      keyboard.BUBBLE = false;
      this.world.bubbles.push(new Bubble(this.x, this.y, this.otherDirection));
    }
  }

  /**
   * on collision with enemy check attack state and enemy type
   * @param {Object} enemy
   */
  getHitByEnemy(enemy) {
    if (!enemy.dead && this.death === "none") {
      if (enemy.constructor.name === "Pufferfish") {
        if (this.world.keyboard.ATTACK) {
          if (music.soundOn) this.slapSound.play();
          enemy.dead = true;
        } else this.takeDamage("poisoned", 1);
      } else if (enemy.constructor.name === "Jelly") this.hitByJelly(enemy);
      else if (enemy.constructor.name === "Boss") this.hitByBoss(enemy);
    }
  }

  /**
   * on collision with boss take large amount of damage
   */
  hitByBoss() {
    this.takeDamage("poisoned", 3);
  }

  /**
   * on collision with jellyfish take amount of damage depending on variant
   * @param {Object} enemy
   */
  hitByJelly(enemy) {
    if (enemy.variant < 2) this.takeDamage("poisoned", 1);
    else this.takeDamage("shocked", 2);
  }

  /**
   * take damage and check for death
   * @param {string} damageType
   * @param {string} damageStrength
   */
  takeDamage(damageType, damageStrength) {
    if (!this.immuneToDamage()) {
      if (music.soundOn) this.painSound.play();
      this.health -= 10 * damageStrength;
      this.world.gameValues[0].setValue(this.health);
      if (this.health <= 0) {
        this.death = damageType;
        this.speed = 0;
      }
      this.lastHit = Date.now();
      this.state = damageType;
      this.currentImage = 0;
    }
  }

  /**
   * checks if last damage is more recent than 1 second
   * @returns true /false
   */
  immuneToDamage() {
    if (this.lastHit != 0) return Date.now() - this.lastHit < 1000;
    else return false;
  }

  /**
   * update values when bottle collected
   */
  collectBottle() {
    this.poison += 10;
    this.world.gameValues[1].setValue(this.poison);
  }

  /**
   * update values when coin collected
   */
  collectCoin() {
    this.coins += 1;
    if (music.soundOn) this.coinSound.play();
  }
}
