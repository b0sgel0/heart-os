<template>
  <AuroraBackground />
  <NoiseOverlay />

  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <Dock />
</template>

<script setup>
import { RouterView } from "vue-router";

import AuroraBackground from "@/components/effects/AuroraBackground.vue";
import NoiseOverlay from "@/components/effects/NoiseOverlay.vue";
import Dock from "@/components/navigation/Dock.vue";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>