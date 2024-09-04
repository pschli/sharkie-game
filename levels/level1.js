let level1;

function createBackground(times) {
  let background = [];
  for (i = 0; i <= times; i++) {
    background.push(
      new Background(
        "../img/3_Background/Layers/5_Water/D1.png",
        i * 2 * 959,
        canvas.height
      )
    );
    background.push(
      new Background(
        "../img/3_Background/Layers/4_Fondo_2/D1.png",
        i * 2 * 959,
        canvas.height
      )
    );
    background.push(
      new Background(
        "../img/3_Background/Layers/5_Water/D2.png",
        959 + i * 2 * 959,
        canvas.height
      )
    );
    background.push(
      new Background(
        "../img/3_Background/Layers/4_Fondo_2/D2.png",
        959 + i * 2 * 959,
        canvas.height
      )
    );
  }
  return background;
}

function createMiddleground(times) {
  let background = [];
  for (i = 0; i <= times; i++) {
    background.push(
      new Background(
        "../img/3_Background/Layers/3_Fondo_1/D1.png",
        i * 2 * 959,
        canvas.height
      )
    );
    background.push(
      new Background(
        "../img/3_Background/Layers/3_Fondo_1/D2.png",
        959 + i * 2 * 959,
        canvas.height
      )
    );
  }
  return background;
}

function createForeground(times) {
  let background = [];
  for (i = 0; i <= times; i++) {
    background.push(
      new Background(
        "../img/3_Background/Layers/2_Floor/D1.png",
        i * 2 * 959,
        canvas.height
      )
    );
    background.push(
      new Background(
        "../img/3_Background/Layers/2_Floor/D2.png",
        959 + i * 2 * 959,
        canvas.height
      )
    );
  }
  return background;
}

function createPuffy(distance) {
  let puffy = new Pufferfish(distance);
  return puffy;
}

function createJelly(distance) {
  let jelly = new Jelly(distance);
  return jelly;
}

function createEnemies(times) {
  let enemies = [];
  for (i = 0; i <= times; i++) {
    enemies.push(
      createPuffy((i % 10) * 700 + Math.floor(Math.random() * 1000))
    );
    enemies.push(
      createJelly((i % 10) * 700 + Math.floor(Math.random() * 1000))
    );
  }
  return enemies;
}

function initLevels(canvas) {
  level1 = new Level(
    createBackground(5),
    createMiddleground(5),
    createForeground(5),
    createEnemies(20),
    [new Bottle(400), new Coin(600)]
  );
}
