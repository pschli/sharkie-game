class Sprite {
  x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  drawSprite(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Jelly ||
      this instanceof Pufferfish
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "green";
      ctx.rect(
        this.x + this.collision_inset_left,
        this.y + this.collision_inset_top,
        this.width - this.collision_inset_right,
        this.height - this.collision_inset_bottom
      );
      ctx.stroke();
    }
  }

  isColliding(sprite) {
    return (
      this.x +
        this.collision_inset_left +
        this.width -
        this.collision_inset_right >=
        sprite.x + sprite.collision_inset_left &&
      this.x + this.collision_inset_left <=
        sprite.x +
          sprite.collision_inset_left +
          sprite.width -
          sprite.collision_inset_right &&
      this.y +
        this.collision_inset_top +
        this.height -
        this.collision_inset_bottom >=
        sprite.y + sprite.collision_inset_top &&
      this.y + this.collision_inset_top <=
        sprite.y +
          sprite.collision_inset_top +
          sprite.height -
          sprite.collision_inset_bottom
      //     && sprite.onCollisionCourse
    );
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveUp() {
    console.log("sprite moved left");
  }

  moveDown() {
    console.log("sprite moved left");
  }
}
