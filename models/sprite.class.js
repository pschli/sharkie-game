class Sprite extends Display {
  /*x = 100;
  y = 300;
  img;
  ar;
  imageCache = {};
  currentImage = 0; */
  speed_x = 0.15;
  speed_y = 0.15;
  otherDirection = false;

  /* loadImage(path) {
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

  /*
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
  } */

  isColliding(sprite) {
    return (
      this.touchesLeftBorder(sprite) &&
      this.touchesRightBorder(sprite) &&
      this.touchesBottomBorder(sprite) &&
      this.touchesTopBorder(sprite)
      //     && sprite.onCollisionCourse
    );
  }

  touchesLeftBorder(sprite) {
    return (
      this.x +
        this.collision_inset_left +
        this.width -
        this.collision_inset_right >=
      sprite.x + sprite.collision_inset_left
    );
  }

  touchesRightBorder(sprite) {
    return (
      this.x + this.collision_inset_left <=
      sprite.x +
        sprite.collision_inset_left +
        sprite.width -
        sprite.collision_inset_right
    );
  }

  touchesBottomBorder(sprite) {
    return (
      this.y +
        this.collision_inset_top +
        this.height -
        this.collision_inset_bottom >=
      sprite.y + sprite.collision_inset_top
    );
  }

  touchesTopBorder(sprite) {
    return (
      this.y + this.collision_inset_top <=
      sprite.y +
        sprite.collision_inset_top +
        sprite.height -
        sprite.collision_inset_bottom
    );
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    this.x -= this.speed_x;
  }

  moveRight() {
    this.x += this.speed_x;
  }

  moveUp() {
    this.y -= this.speed_y;
  }

  moveDown() {
    this.y += this.speed_y;
  }
}
