import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    screen: "hero",
  }),

  actions: {
    showBoot() {
      this.screen = "boot";
    },

    showMemories() {
      this.screen = "memories";
    },

    backToHero() {
      this.screen = "hero";
    },
  },
});