import { createRouter, createWebHistory } from "vue-router";

// Pages
import Intro from "@/pages/Intro.vue";
import Boot from "@/pages/Boot.vue";
import Decrypt from "@/pages/Decrypt.vue";
import Letter from "@/pages/Letter.vue";
import Memories from "@/pages/Memories.vue";
import MemoryDetail from "@/pages/MemoryDetail.vue";
import Ending from "@/pages/Ending.vue";

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },

  routes: [
    {
      path: "/",
      name: "Intro",
      component: Intro,
    },
    {
      path: "/boot",
      name: "Boot",
      component: Boot,
    },
    {
      path: "/decrypt",
      name: "Decrypt",
      component: Decrypt,
    },
    {
      path: "/letter",
      name: "Letter",
      component: Letter,
    },
    {
      path: "/memories",
      name: "Memories",
      component: Memories,
    },
    {
      path: "/memories/:id",
      name: "MemoryDetail",
      component: MemoryDetail,
    },
    {
      path: "/ending",
      name: "Ending",
      component: Ending,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;