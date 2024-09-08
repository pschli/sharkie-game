let level1;

/**
 * creates the background tiles for the game
 * @param {number} times iterations to determine the length width of the level
 * @returns an array of Background elements
 */
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

/**
 * creates the middleground tiles for the game
 * @param {number} times iterations to determine the length width of the level
 * @returns an array of Middleground elements
 */
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

/**
 * creates the foreground tiles for the game
 * @param {number} times iterations to determine the length width of the level
 * @returns an array of Foreground elements
 */
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

/**
 * creates gnemies for the game
 * @param {number} times iterations to determine, how many enemies the are
 * @returns an Array of enemy Objects
 */
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

/**
 * creates an instance of Pufferfish
 * @param {number} distance where the enemy is created
 * @returns Pufferfish object
 */
function createPuffy(distance) {
  let puffy = new Pufferfish(distance);
  return puffy;
}

/**
 * creates an instance of Jelly
 * @param {number} distance where the enemy is created
 * @returns Jelly object
 */
function createJelly(distance) {
  let jelly = new Jelly(distance);
  return jelly;
}

/**
 * creates a poison bottle for collection
 * @param {number} distance random coordinate
 * @returns Bottle object
 */
function createPoisonBottle(distance) {
  let bottle = new Bottle(distance);
  return bottle;
}

/**
 * creates a coin for collection
 * @param {number} distance random coordinate
 * @returns Coin object
 */
function createCoin(distance) {
  let coin = new Coin(distance);
  return coin;
}

/**
 * creates collectables for the level
 * @returns array of Coin and Bottle objects
 */
function createCollectables() {
  let collectables = [];
  for (i = 0; i <= 50; i++) {
    collectables.push(
      createCoin((i % 10) * 500 + Math.floor(Math.random() * 1000) + 100)
    );
  }
  for (i = 0; i <= 10; i++) {
    collectables.push(
      createPoisonBottle((i % 10) * 700 + Math.floor(Math.random() * 1000))
    );
  }
  return collectables;
}

/**
 * Builds the level from various objects
 * @param {Element} canvas
 */
async function initLevels(canvas) {
  level1 = new Level(
    createBackground(5),
    createMiddleground(5),
    createForeground(5),
    createEnemies(20),
    createCollectables()
  );
}
