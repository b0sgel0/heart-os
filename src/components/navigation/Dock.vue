<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import DockItem from "./DockItem.vue";

const router = useRouter();
const route = useRoute();
const hiddenRoutes = ["/", "/boot"];

const showDock = computed(() => !hiddenRoutes.includes(route.path));

const items = [
  {
    icon: "❤️",
    path: "/",
  },
  {
    icon: "📸",
    path: "/memories",
  },
  {
    icon: "💌",
    path: "/letter",
  },
];

function navigate(path) {
  if (route.path !== path) {
    router.push(path);
  }
}
</script>

<>
  <template>
  <nav
    v-if="showDock"
    class="dock"
  >
    <DockItem
      v-for="item in items"
      :key="item.path"
      :icon="item.icon"
      :active="route.path === item.path"
      @click="navigate(item.path)"
    />
  </nav>
</template>


<style scoped>
.dock{

position:fixed;

left:50%;

bottom:24px;

transform:translateX(-50%);

display:flex;

gap:14px;

padding:12px;

background:rgba(18,18,22,.65);

backdrop-filter:blur(24px);

border:1px solid rgba(255,255,255,.08);

border-radius:24px;

z-index:999;

}

@media(max-width:767px){

.dock{

left:20px;
right:20px;

transform:none;

justify-content:space-around;

bottom:
calc(env(safe-area-inset-bottom) + 12px);

}

}
</style>