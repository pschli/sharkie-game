class Sprite extends Display {
  speed_x = 0.15;
  speed_y = 0.15;
  otherDirection = false;
  /*
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Boss) {
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
  }*/

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
