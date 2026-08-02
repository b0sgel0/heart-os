<template>
  <AuroraBackground />

  <AppContainer>
    <h1>HeartOS</h1>
    <p>Container berhasil dibuat.</p>
  </AppContainer>
</template>

<script setup>
import AuroraBackground from '@/components/effects/AuroraBackground.vue'
import AppContainer from '@/components/ui/AppContainer.vue'
</script>

<style scoped>
h1{
  margin-top:120px;
}
</style>