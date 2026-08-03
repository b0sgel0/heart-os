import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {

  state: () => ({

    colors: {

      a: "#ff4d8d",

      b: "#8b5cf6",

      c: "#67e8f9",

    },

  }),

  actions: {

    setTheme(a, b, c) {

      this.colors = { a, b, c };

      document.documentElement.style.setProperty(
        "--aurora-1",
        a
      );

      document.documentElement.style.setProperty(
        "--aurora-2",
        b
      );

      document.documentElement.style.setProperty(
        "--aurora-3",
        c
      );

    },

  },

});