class Level {
  background;
  middleground;
  foreground;
  enemies;
  collectables;
  level_end_x = 8000;

  constructor(background, middleground, foreground, enemies, collectables) {
    this.background = background;
    this.middleground = middleground;
    this.foreground = foreground;
    this.enemies = enemies;
    this.collectables = collectables;
  }
}
