import { ref } from "vue";

export function useTypewriter(text, speed = 50) {
  const output = ref("");

  function start() {
    output.value = "";

    let index = 0;

    const interval = setInterval(() => {
      output.value += text[index];
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
  }

  return {
    output,
    start,
  };
}