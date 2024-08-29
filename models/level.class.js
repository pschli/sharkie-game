class Level {
  background;
  middleground;
  foreground;
  enemies;
  level_end_x = 700;

  constructor(background, middleground, foreground, enemies) {
    this.background = background;
    this.middleground = middleground;
    this.foreground = foreground;
    this.enemies = enemies;
  }
}
