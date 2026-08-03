<template>
  <div class="noise"></div>
</template>

<style scoped>
.noise{
  position: fixed;
  inset: 0;

  pointer-events: none;

  background-image: url("@/assets/textures/noise.svg");
  background-repeat: repeat;
  background-size: 180px;

  opacity: .04;

  mix-blend-mode: soft-light;

  z-index: 0;
}
</style>