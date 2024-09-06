class Music {
  musicOn;
  soundOn = true;
  music = new Audio("audio/mixkit-epical-drums-05-680.mp3");

  constructor(musicOn) {
    this.playMusic();
  }

  toggleSound() {
    this.soundOn ? (this.soundOn = false) : (this.soundOn = true);
  }

  toggleMusic() {
    if (this.musicOn) {
      this.stopMusic();
    } else {
      this.playMusic();
    }
  }

  playMusic() {
    this.music.play();
    this.music.loop = true;
    this.musicOn = true;
  }

  stopMusic() {
    this.music.pause();
    this.musicOn = false;
  }
}
