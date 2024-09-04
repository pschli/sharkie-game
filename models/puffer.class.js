class Pufferfish extends Sprite {
  x = 720;
  y = 100 + Math.floor(Math.random() * 300);
  collision_inset_top = 5;
  collision_inset_bottom = 10;
  collision_inset_left = 15;
  collision_inset_right = 45;
  variant = Math.floor(Math.random() * 3);
  puffState = "normal";
  ar = 1.217;
  dead = false;
  bubblestate = false;

  IMAGES_MOVING = [
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/2_swim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/2_swim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/2_swim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/2_swim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/2_swim5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/3_swim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/3_swim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/3_swim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/3_swim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/3_swim5.png",
    ],
  ];

  IMAGES_TRANSITION = [
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/1_transition1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/1_transition2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/1_transition3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/1_transition4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/1_transition5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/2_transition1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/2_transition2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/2_transition3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/2_transition4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/2_transition5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/3_transition1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/3_transition2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/3_transition3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/3_transition4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/2_transition/3_transition5.png",
    ],
  ];

  IMAGES_BUBBLESWIM = [
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/1_bubbleswim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/1_bubbleswim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/1_bubbleswim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/1_bubbleswim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/1_bubbleswim5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/2_bubbleswim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/2_bubbleswim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/2_bubbleswim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/2_bubbleswim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/2_bubbleswim5.png",
    ],
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/3_bubbleswim1.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/3_bubbleswim2.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/3_bubbleswim3.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/3_bubbleswim4.png",
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/3_bubbleswim/3_bubbleswim5.png",
    ],
  ];

  IMAGES_DEAD = [
    [
      "../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/1.Dead_1_(can_animate_by_going_up).png",
    ],
    ["../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/2.png"],
    ["../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/3.png"],
  ];

  constructor(distance = 1) {
    super().loadImage(this.IMAGES_MOVING[this.variant][0]);
    this.x += distance;
    this.height = 100;
    this.width = this.height * this.ar;
    this.loadImages(this.IMAGES_MOVING[this.variant]);
    this.loadImages(this.IMAGES_TRANSITION[this.variant]);
    this.loadImages(this.IMAGES_BUBBLESWIM[this.variant]);
    this.loadImages(this.IMAGES_DEAD[this.variant]);
    this.speed = 0.15 + Math.random() * 0.5;
    this.speed_x = this.speed;
    this.speed_y = this.speed;
    this.animate();
    this.checkTransformationDistance();
  }

  checkTransformationDistance() {
    setInterval(() => {
      if (this.characterIsClose()) this.transformToBubble();
    }, 200);
  }

  characterIsClose() {
    return this.x - world.character.x < 500 && this.puffState === "normal";
  }

  transformToBubble() {
    this.puffState = "transition";
    this.currentImage = 0;
  }

  animate() {
    setInterval(() => {
      if (!this.dead) this.moveLeft();
      else {
        setTimeout(() => {
          this.speed_x = 5;
          this.speed_y = 5;
          this.moveRight();
          this.moveUp();
        }, 300);
      }
    }, 1000 / 60);
    setInterval(() => {
      this.animationFrames();
    }, 150);
  }

  animationFrames() {
    if (this.dead) {
      setTimeout(() => {
        this.playAnimation(this.IMAGES_DEAD[this.variant]);
      }, 200);
    } else if (this.puffState === "normal")
      this.playAnimation(this.IMAGES_MOVING[this.variant]);
    else if (this.puffState === "transition") {
      this.playAnimation(this.IMAGES_TRANSITION[this.variant]);
      if (this.currentImage === 4) {
        this.puffState = "bubble";
      }
    } else if (this.puffState === "bubble") {
      this.playAnimation(this.IMAGES_BUBBLESWIM[this.variant]);
    }
  }
}
