<template>
  <article
    class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <img
      :src="memory.image"
      :alt="memory.title"
      class="h-64 w-full object-cover"
    />

    <div class="space-y-3 p-6">
      <h2 class="text-2xl font-bold text-white">
        {{ memory.title }}
      </h2>

      <p class="text-zinc-400">
        {{ memory.description }}
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  memory: {
    type: Object,
    required: true,
  },
});
</script>