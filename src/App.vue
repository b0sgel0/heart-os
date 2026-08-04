<template>
  <AuroraBackground />
  <NoiseOverlay />

  <RouterView />

  <Dock />
</template>

<script setup>
import { RouterView } from "vue-router";

import AuroraBackground from "@/components/effects/AuroraBackground.vue";
import NoiseOverlay from "@/components/effects/NoiseOverlay.vue";
import Dock from "@/components/navigation/Dock.vue";
</script>