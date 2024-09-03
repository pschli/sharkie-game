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
  lastHit = 0;
  state = "normal";
  death = "none";
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
    this.loadImages(this.IMAGES_ATTACK_FIN);
    this.loadImages(this.IMAGES_ATTACK_BUBBLE);
    this.loadImages(this.IMAGES_POISONED);
    this.loadImages(this.IMAGES_SHOCKED);
    this.loadImages(this.IMAGES_DEAD_POISON);
    this.loadImages(this.IMAGES_DEAD_SHOCK);
    this.animate();
  }

  movement() {
    if (this.death === "none") {
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
  }

  animate() {
    setInterval(() => {
      this.movement();
    }, 1000 / 60);

    setInterval(() => {
      this.animationFrames();
    }, 100);
  }

  animationFrames() {
    if (this.death != "none") {
      this.showDeath();
    } else if (this.state === "poisoned") {
      this.showPoisoned();
    } else if (this.state === "shocked") {
      this.showShocked();
    } else if (this.world.keyboard.ATTACK) {
      this.showFinAttack();
    } else if (this.world.keyboard.BUBBLE) {
      this.showBubbleAttack();
    } else if (this.characterMoves()) {
      this.playAnimation(this.IMAGES_MOVING);
    } else {
      this.playAnimation(this.IMAGES_IDLE);
    }
  }

  characterMoves() {
    return (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.keyboard.DOWN
    );
  }

  showPoisoned() {
    this.playAnimation(this.IMAGES_POISONED);
    if (this.currentImage === this.IMAGES_POISONED.length) {
      this.state = "normal";
    }
  }

  showShocked() {
    this.playAnimation(this.IMAGES_SHOCKED);
    if (this.currentImage >= this.IMAGES_SHOCKED.length * 3) {
      this.state = "normal";
    }
  }

  showDeath() {
    if (this.death === "shocked") {
      this.playAnimation(this.IMAGES_DEAD_SHOCK);
      if (this.currentImage === this.IMAGES_DEAD_SHOCK.length) {
        this.death = "stay shocked";
      }
    } else if (this.death === "poisoned") {
      this.playAnimation(this.IMAGES_DEAD_POISON);
      if (this.currentImage === this.IMAGES_DEAD_POISON.length) {
        this.death = "stay poisoned";
      }
    } else if (this.death === "stay poisoned") {
      this.currentImage = 11;
      this.playAnimation(this.IMAGES_DEAD_POISON);
    } else if (this.death === "stay shocked") {
      this.currentImage = 9;
      this.playAnimation(this.IMAGES_DEAD_SHOCK);
    }
  }

  showFinAttack() {
    this.collision_inset_right = 50;
    this.playAnimation(this.IMAGES_ATTACK_FIN);
    if (this.currentImage === this.IMAGES_ATTACK_FIN.length - 1) {
      keyboard.ATTACK = false;
      this.collision_inset_right = 100;
    }
  }

  showBubbleAttack() {
    this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
    if (this.currentImage === this.IMAGES_ATTACK_BUBBLE.length - 1) {
      keyboard.BUBBLE = false;
      this.world.bubbles.push(new Bubble(this.x, this.y, this.otherDirection));
    }
  }

  getHitByEnemy(enemy) {
    if (!enemy.dead && this.death === "none") {
      if (enemy.constructor.name === "Pufferfish") {
        if (this.world.keyboard.ATTACK) enemy.dead = true;
        else this.takeDamage("poisoned", enemy);
      } else if (enemy.constructor.name === "Jelly") this.hitByJelly(enemy);
    }
  }

  hitByJelly(enemy) {
    if (enemy.variant < 2) this.takeDamage("poisoned", enemy);
    else this.takeDamage("shocked", enemy);
  }

  takeDamage(damageType, enemy) {
    if (!this.immuneToDamage()) {
      this.health -= 10;
      if (this.health <= 0) {
        this.death = damageType;
        this.speed = 0;
      }
      this.lastHit = Date.now();
      this.state = damageType;
      this.currentImage = 0;
    }
  }

  immuneToDamage() {
    if (this.lastHit != 0) return Date.now() - this.lastHit < 1000;
    else return false;
  }
}
