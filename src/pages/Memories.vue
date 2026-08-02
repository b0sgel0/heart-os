<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MemoryCard from "@/components/memories/MemoryCard.vue";
import { memories } from "@/data/memories";
</script>

<template>
  <DefaultLayout>
    <section class="mx-auto max-w-6xl px-6 py-20">

      <h1
        class="mb-12 text-center text-5xl font-bold text-white"
      >
        ❤️ Memories
      </h1>

      <div
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <MemoryCard
          v-for="memory in memories"
          :key="memory.id"
          :memory="memory"
        />
      </div>

    </section>
  </DefaultLayout>
</template>