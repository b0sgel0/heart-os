import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Intro from '../pages/Intro.vue'
import Boot from '../pages/Boot.vue'
import Decrypt from '../pages/Decrypt.vue'
import Letter from '../pages/Letter.vue'
import Memories from '../pages/Memories.vue'
import Ending from '../pages/Ending.vue'
import MemoryDetail from "../pages/MemoryDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/boot',
      name: 'Boot',
      component: Boot,
    },
    {
      path: '/decrypt',
      name: 'Decrypt',
      component: Decrypt,
    },
    {
      path: '/letter',
      name: 'Letter',
      component: Letter,
    },
    {
      path: '/memories',
      name: 'Memories',
      component: Memories,
    },
    {
      path: '/ending',
      name: 'Ending',
      component: Ending,
    },
    {
  path: "/memories/:id",
  name: "MemoryDetail",
  component: MemoryDetail,
},
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router