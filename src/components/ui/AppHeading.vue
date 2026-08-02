<script setup>
defineProps({
  tag:{
    type:String,
    default:"h1"
  },

  size:{
    type:String,
    default:"xl"
  }
})
</script>

<template>
  <component
    :is="tag"
    class="heading"
    :class="size"
  >
    <slot/>
  </component>
</template>

<style scoped>
.heading{
font-family:"Clash Display";
color:var(--text);
line-height:1.05;
letter-spacing:-.04em;
}

.hero{
font-size:clamp(4rem,10vw,7rem);
}

.xl{
font-size:clamp(3rem,7vw,5rem);
}

.lg{
font-size:clamp(2.3rem,5vw,3.5rem);
}

.md{
font-size:2rem;
}

.sm{
font-size:1.4rem;
}
</style>