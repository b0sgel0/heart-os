<template>
  <div class="hero-title">
    <AppHeading tag="h1" size="hero">
      HEART.OS
    </AppHeading>
  </div>
</template>

<script setup>
import AppHeading from "@/components/ui/AppHeading.vue";
</script>

<style scoped>
.hero-title {
  text-align: center;
}

.hero-title :deep(.heading) {
  text-shadow: 0 0 50px rgba(255, 77, 141, 0.25);
}
</style>