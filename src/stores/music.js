import { defineStore } from "pinia";
import bgMusic from "@/assets/audio/NUCA - MASA INI, NANTI, DAN MASA INDAH LAINNYA (OFFICIAL LYRIC VIDEO) - Nuca.mp3";

export const useMusicStore = defineStore("music", {
  state: () => ({
    audio: null,

    playing: false,

    duration: 0,
    currentTime: 0,
    progress: 0,

    volume: Number(localStorage.getItem("music-volume") ?? 0.5),
  }),

  actions: {
    init() {
      if (this.audio) return;

      this.audio = new Audio(bgMusic);

      this.audio.loop = true;
      this.audio.volume = this.volume;

      this.audio.addEventListener("loadedmetadata", () => {
        this.duration = this.audio.duration;
      });

      this.audio.addEventListener("timeupdate", () => {
        this.currentTime = this.audio.currentTime;

        if (this.duration > 0) {
          this.progress =
            (this.currentTime / this.duration) * 100;
        }
      });

      this.audio.addEventListener("ended", () => {
        this.playing = false;
      });
    },

    async play() {
      this.init();

      try {
        await this.audio.play();
        this.playing = true;
      } catch (err) {
        console.warn(err);
      }
    },

    pause() {
      if (!this.audio) return;

      this.audio.pause();
      this.playing = false;
    },

    toggle() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    },

    setVolume(value) {
      this.volume = value;

      localStorage.setItem("music-volume", value);

      if (this.audio) {
        this.audio.volume = value;
      }
    },

    seek(percent) {
      if (!this.audio || !this.duration) return;

      this.audio.currentTime =
        (percent / 100) * this.duration;
    },
  },
});