class Pufferfish extends Sprite {
  x = 500;
  y = 100;
  variant = Math.floor(Math.random() * 3);
  currentImage = 0;
  ar = 1.217;

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
    "../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/1.Dead_1_(can_animate_by_going_up).png",
    "../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/2.png",
    "../img/2_Enemy/1_Puffer_fish_(3_color_options)/4_DIE/3.png",
  ];

  constructor(image) {
    super().loadImage(this.IMAGES_MOVING[this.variant][0]);
    this.height = 100;
    this.width = this.height * this.ar;
    this.loadImages(this.IMAGES_MOVING[this.variant]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_MOVING[this.variant].length;
      let path = this.IMAGES_MOVING[this.variant][i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }
}
