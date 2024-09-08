class Sprite extends Display {
  speed_x = 0.15;
  speed_y = 0.15;
  otherDirection = false;

  /**
   * checks for overlapping Objects
   * @param {Object} sprite
   * @returns true or false
   */
  isColliding(sprite) {
    return (
      this.touchesLeftBorder(sprite) &&
      this.touchesRightBorder(sprite) &&
      this.touchesBottomBorder(sprite) &&
      this.touchesTopBorder(sprite)
    );
  }

  /**
   * checks left border for overlap
   * @param {Object} sprite
   * @returns true / false
   */
  touchesLeftBorder(sprite) {
    return (
      this.x +
        this.collision_inset_left +
        this.width -
        this.collision_inset_right >=
      sprite.x + sprite.collision_inset_left
    );
  }

  /**
   * checks right border for overlap
   * @param {Object} sprite
   * @returns true / false
   */
  touchesRightBorder(sprite) {
    return (
      this.x + this.collision_inset_left <=
      sprite.x +
        sprite.collision_inset_left +
        sprite.width -
        sprite.collision_inset_right
    );
  }

  /**
   * checks bottom border for overlap
   * @param {Object} sprite
   * @returns true / false
   */
  touchesBottomBorder(sprite) {
    return (
      this.y +
        this.collision_inset_top +
        this.height -
        this.collision_inset_bottom >=
      sprite.y + sprite.collision_inset_top
    );
  }

  /**
   * checks top border for overlap
   * @param {Object} sprite
   * @returns true / false
   */
  touchesTopBorder(sprite) {
    return (
      this.y + this.collision_inset_top <=
      sprite.y +
        sprite.collision_inset_top +
        sprite.height -
        sprite.collision_inset_bottom
    );
  }

  /**
   * iterates throung array of images to form an animation
   * @param {Array} images
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * changing position of Object by moving left
   */
  moveLeft() {
    this.x -= this.speed_x;
  }

  /**
   * changing position of Object by moving right
   */
  moveRight() {
    this.x += this.speed_x;
  }

  /**
   * changing position of Object by moving up
   */
  moveUp() {
    this.y -= this.speed_y;
  }

  /**
   * changing position of Object by moving down
   */
  moveDown() {
    this.y += this.speed_y;
  }
}
