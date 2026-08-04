<template>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped>
.container{
  width:min(1200px,100%);
  margin:0 auto;

  padding:40px;

  min-height:100vh;
}

/* Tablet */
@media (max-width:1023px){

.container{

padding:32px 24px;

}

}

/* Mobile */
@media (max-width:767px){

.container{

padding:
env(safe-area-inset-top,20px)
20px
env(safe-area-inset-bottom,20px);

}

}
</style>