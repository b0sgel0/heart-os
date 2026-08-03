<template>
  <section class="hero">

    <div ref="title">
      <HeroTitle />
    </div>

    <div ref="subtitle">
      <HeroSubtitle />
    </div>

    <div ref="button">
      <HeroActions />
    </div>

    <div ref="scroll">
      <HeroScrollIndicator />
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

import HeroTitle from "./HeroTitle.vue"
import HeroSubtitle from "./HeroSubtitle.vue"
import HeroActions from "./HeroActions.vue"
import HeroScrollIndicator from "./HeroScrollIndicator.vue"

const title = ref(null)
const subtitle = ref(null)
const button = ref(null)
const scroll = ref(null)

onMounted(() => {

  gsap.set(
    [
      title.value,
      subtitle.value,
      button.value,
      scroll.value
    ],
    {
      opacity: 0
    }
  )

  const tl = gsap.timeline()

  tl.fromTo(
    title.value,
    {
      y: 40,
      opacity: 0,
      filter: "blur(18px)"
    },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.out"
    }
  )

  .fromTo(
    subtitle.value,
    {
      y: 20,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: .7
    },
    "-=.45"
  )

  .fromTo(
    button.value,
    {
      scale: .8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: .55,
      ease: "back.out(1.7)"
    },
    "-=.25"
  )

  .fromTo(
    scroll.value,
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: .5
    },
    "-=.15"
  )

})
</script>

<style scoped>
.hero{
  min-height:100vh;

  display:flex;
  flex-direction:column;

  justify-content:center;
  align-items:center;

  gap:28px;
  text-align:center;
}
</style>