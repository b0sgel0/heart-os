<template>
  <div class="hero-title">
    <AppHeading
      tag="h1"
      size="hero"
    >
      HEART.OS
    </AppHeading>
  </div>
</template>

<script setup>
import AppHeading from '@/components/ui/AppHeading.vue'
</script>

<style scoped>
.hero-title{
  display:flex;
  justify-content:center;
}

.hero-title h1{
  text-align:center;
  max-width:900px;
}
</style>