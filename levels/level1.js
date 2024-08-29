let level1;

function initLevels(canvas) {
  level1 = new Level(
    [
      new Background(
        "../img/3_Background/Layers/5_Water/D1.png",
        0,
        canvas.height
      ),
      new Background(
        "../img/3_Background/Layers/4_Fondo_2/D1.png",
        0,
        canvas.height
      ),
      new Background(
        "../img/3_Background/Layers/5_Water/D2.png",
        959,
        canvas.height
      ),
      new Background(
        "../img/3_Background/Layers/4_Fondo_2/D2.png",
        959,
        canvas.height
      ),
    ],
    [
      new Background(
        "../img/3_Background/Layers/3_Fondo_1/D1.png",
        0,
        canvas.height
      ),
      new Background(
        "../img/3_Background/Layers/3_Fondo_1/D2.png",
        959,
        canvas.height
      ),
    ],
    [
      new Background(
        "../img/3_Background/Layers/2_Floor/D1.png",
        0,
        canvas.height
      ),
      new Background(
        "../img/3_Background/Layers/2_Floor/D2.png",
        959,
        canvas.height
      ),
    ],
    [
      new Pufferfish(
        "../img/2_Enemy/1_Puffer_fish_(3_color_options)/1_Swim/1_swim1.png"
      ),
      new Jelly("../img/2_Enemy/2_Jelly_fish/Regular_damage/Lila1.png"),
    ]
  );
}
