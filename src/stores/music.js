import { defineStore } from "pinia";

import bgMusic from "@/assets/audio/NUCA - MASA INI, NANTI, DAN MASA INDAH LAINNYA (OFFICIAL LYRIC VIDEO) - Nuca.mp3";

export const useMusicStore = defineStore("music", {
  state: () => ({
    audio: null,
    playing: false,
  }),

  actions: {
    init() {
      if (this.audio) return;

      this.audio = new Audio(bgMusic);

      this.audio.loop = true;
      this.audio.volume = 0.5;
    },

    async play() {
      this.init();

      try {
        await this.audio.play();
        this.playing = true;
      } catch (error) {
        console.warn("Autoplay diblokir browser:", error);
      }
    },

    pause() {
      if (!this.audio) return;

      this.audio.pause();
      this.playing = false;
    },

    setVolume(volume) {
      if (!this.audio) return;

      this.audio.volume = volume;
    },
  },
});