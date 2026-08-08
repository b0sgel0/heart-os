<template>
  <!-- Global Effects -->
  <AuroraBackground />
  <NoiseOverlay />

  <!-- Global Music Player -->
  <MusicPlayer />

  <!-- Pages -->
  <RouterView v-slot="{ Component, route }">
    <Transition
      name="page"
      mode="out-in"
    >
      <component
        :is="Component"
        :key="route.fullPath"
      />
    </Transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from "vue-router";

import AuroraBackground from "@/components/effects/AuroraBackground.vue";
import NoiseOverlay from "@/components/effects/NoiseOverlay.vue";
import MusicPlayer from "@/components/music/MusicPlayer.vue";
</script>

<style>
.page-enter-active,
.page-leave-active{
  transition:
    opacity .35s ease,
    transform .35s ease;
}

.page-enter-from{
  opacity:0;
  transform:translateY(20px);
}

.page-leave-to{
  opacity:0;
  transform:translateY(-20px);
}
</style>