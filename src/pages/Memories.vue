<template>
  <AppContainer>

    <SectionTitle>
      <template #title>
        Our Memories
      </template>

      <template #subtitle>
        Every moment has a story worth remembering.
      </template>
    </SectionTitle>

    <MemoryTimeline/>

  </AppContainer>
</template>

<script setup>
import AppContainer from "@/components/ui/AppContainer.vue";

import SectionTitle from "@/components/memories/SectionTitle.vue";
import MemoryTimeline from "@/components/memories/MemoryTimeline.vue";
</script>