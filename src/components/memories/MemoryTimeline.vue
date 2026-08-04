<script setup>
import { ref } from "vue";

import { useReveal } from "@/composables/useReveal";

import memories from "@/data/memories";

import MemoryCard from "./MemoryCard.vue";
import MemoryModal from "./MemoryModal.vue";

useReveal(".timeline-item");

const selectedMemory = ref(null);

function openMemory(memory) {
  selectedMemory.value = memory;
}

function closeMemory() {
  selectedMemory.value = null;
}
</script>

<template>
  <section class="timeline">

    <div
      v-for="item in memories"
      :key="item.id"
      class="timeline-item"
    >
      <div class="dot"></div>

      <MemoryCard
        v-bind="item"
        @open="openMemory(item)"
      />

    </div>

    <MemoryModal
      :memory="selectedMemory"
      @close="closeMemory"
    />

  </section>
</template>

<style scoped>

.timeline{
  position:relative;

  max-width:900px;

  margin:0 auto 140px;

  padding-left:60px;
}

.timeline::before{
  content:"";

  position:absolute;

  left:18px;

  top:0;
  bottom:0;

  width:2px;

  background:linear-gradient(
    180deg,
    #ff4d8d,
    #8b5cf6,
    #67e8f9
  );
}

.timeline-item{
  position:relative;

  margin-bottom:48px;
}

.dot{
  position:absolute;

  left:-51px;

  top:42px;

  width:16px;
  height:16px;

  border-radius:50%;

  background:#ff4d8d;

  box-shadow:
    0 0 20px rgba(255,77,141,.7);
}

@media (max-width:767px){

.timeline{

padding-left:24px;

}

.timeline::before{

left:8px;

}

.dot{

left:-21px;

}

}
</style>