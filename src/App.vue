<template>
  <AuroraBackground />
  <NoiseOverlay />

  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";

import AuroraBackground from "@/components/effects/AuroraBackground.vue";
import NoiseOverlay from "@/components/effects/NoiseOverlay.vue";
</script>