class Character extends Sprite {
  x = 100;
  y = 100;
  ar = 0.815;
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
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_MOVING.length;
      let path = this.IMAGES_MOVING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }

  attack() {}
}
