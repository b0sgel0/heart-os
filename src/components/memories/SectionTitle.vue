<template>
  <section class="section-title">
    <AppHeading size="xl">
      <slot name="title" />
    </AppHeading>

    <AppText center>
      <slot name="subtitle" />
    </AppText>
  </section>
</template>

<script setup>
import AppHeading from "@/components/ui/AppHeading.vue";
import AppText from "@/components/ui/AppText.vue";
</script>

<style scoped>
.section-title{
  text-align:center;
  margin:100px 0 80px;
}
</style>