import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(selector) {
  onMounted(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: index * 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
}