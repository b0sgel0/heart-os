import { onMounted, onBeforeUnmount } from "vue";

export function useTilt(selector) {
  let cards = [];

  function handleMove(e) {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = ((y / rect.height) - 0.5) * -14;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-6px)
        `;
      }
    });
  }

  function resetCards() {
    cards.forEach((card) => {
      card.style.transform = "";
    });
  }

  onMounted(() => {
    cards = [...document.querySelectorAll(selector)];

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", resetCards);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseleave", resetCards);
  });
}