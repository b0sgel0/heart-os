<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: min(1200px, calc(100% - 48px));
  margin-inline: auto;
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 32px);
  }
}
</style>