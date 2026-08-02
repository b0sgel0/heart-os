<template>
  <section class="hero">

    <HeroTitle />

    <HeroSubtitle />

    <HeroActions />

    <HeroScrollIndicator />

  </section>
</template>

<script setup>
import HeroTitle from './HeroTitle.vue'
import HeroSubtitle from './HeroSubtitle.vue'
import HeroActions from './HeroActions.vue'
import HeroScrollIndicator from './HeroScrollIndicator.vue'
</script>

<style scoped>

.hero{

min-height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

gap:24px;

}

</style>