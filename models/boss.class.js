class Boss extends Sprite {
  x = 1500;
  y = 0;
  collision_inset_top = 240;
  collision_inset_bottom = 320;
  collision_inset_left = 35;
  collision_inset_right = 80;
  width = 500;
  height = 500;
  engaged = false;
  death = false;
  state = "normal";
  currentImage = 0;
  speed_x = 0;
  speed_y = 1.5;
  health = 100;
  dead = false;
  reversed = false;
  introPlayed = false;
  animationInterval;
  moveInterval;

  IMAGES_FLOATING = [
    "../img/2_Enemy/3_Final_Enemy/2.floating/1.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/2.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/3.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/4.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/5.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/6.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/7.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/8.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/9.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/10.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/11.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/12.png",
    "../img/2_Enemy/3_Final_Enemy/2.floating/13.png",
  ];
  IMAGES_ATTACK = [
    "../img/2_Enemy/3_Final_Enemy/Attack/1.png",
    "../img/2_Enemy/3_Final_Enemy/Attack/2.png",
    "../img/2_Enemy/3_Final_Enemy/Attack/3.png",
    "../img/2_Enemy/3_Final_Enemy/Attack/4.png",
    "../img/2_Enemy/3_Final_Enemy/Attack/5.png",
    "../img/2_Enemy/3_Final_Enemy/Attack/6.png",
  ];
  IMAGES_INTRO = [
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/1.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/2.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/3.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/4.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/5.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/6.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/7.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/8.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/9.png",
    "../img/2_Enemy/3_Final_Enemy/1.Introduce/10.png",
  ];
  IMAGES_HURT = [
    "../img/2_Enemy/3_Final_Enemy/Hurt/1.png",
    "../img/2_Enemy/3_Final_Enemy/Hurt/2.png",
    "../img/2_Enemy/3_Final_Enemy/Hurt/3.png",
    "../img/2_Enemy/3_Final_Enemy/Hurt/4.png",
  ];
  IMAGES_DEAD = [
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead.png",
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead6.png",
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead7.png",
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead8.png",
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead9.png",
    "../img/2_Enemy/3_Final_Enemy/Dead/boss_dead10.png",
  ];

  constructor() {
    super().loadImage("../img/2_Enemy/3_Final_Enemy/1.Introduce/1.png");
    this.loadImages(this.IMAGES_INTRO);
    this.loadImages(this.IMAGES_FLOATING);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
  }

  animate() {
    this.animationInterval = setInterval(() => {
      this.animationFrames();
    }, 100);
  }

  animationFrames() {
    this.checkForAttack();
    if (this.death) {
      this.showDeath();
    } else if (!this.introPlayed) {
      this.playIntro();
    } else if (this.state === "poisoned") {
      this.showHurt();
    } else if (this.state === "attack") {
      this.showAttack();
    } else {
      this.playAnimation(this.IMAGES_FLOATING);
    }
  }

  showDeath() {
    console.log("Death!");
  }

  showHurt() {
    this.playAnimation(this.IMAGES_HURT);
    if (this.currentImage >= 5) {
      this.state = "normal";
      this.speed_x = 0.5;
      this.speed_y = 1.5;
    }
  }

  showAttack() {
    this.playAnimation(this.IMAGES_ATTACK);
    if (this.currentImage >= 3) {
      this.state = "normal";
      this.speed_x = 0.5;
    }
  }

  checkForAttack() {
    let probe = Math.floor(Math.random() * 1000);
    if (probe > 960) {
      this.state = "attack";
      this.currentImage = 0;
      this.speed_x = 5;
    }
  }

  playIntro() {
    this.playAnimation(this.IMAGES_INTRO);
    if (this.currentImage >= 9) {
      this.introPlayed = true;
      world.level.level_end_x += 1200;
      this.movement();
      this.speed_x = 0.5;
      console.log("intro");
    }
  }

  movement() {
    setInterval(() => {
      if (!this.dead) {
        if (this.x + 500 > world.character.x && !this.reversed) this.moveLeft();
        else if (this.x - 500 > world.character.x && this.reversed) {
          this.reversed = false;
          this.otherDirection = false;
          this.moveLeft();
        } else {
          this.reversed = true;
          this.otherDirection = true;
          this.moveRight();
        }
        if (this.y > world.character.y - 100) this.moveUp();
        else if (this.y < world.character.y - 120) this.moveDown();
      }
    }, 1000 / 60);
  }

  takeDamage() {
    this.health -= 10;
    console.log("Boss at:", this.health);
  }

  engage() {
    this.engaged = true;
    this.currentImage = 0;
    this.animate();
    console.log("Boss engaged");
    world.character.poisonBubbles = true;
  }
}
