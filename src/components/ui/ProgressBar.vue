<template>
  <div class="w-full max-w-xl">
    <div class="h-4 overflow-hidden rounded-full bg-zinc-800">
      <div
        class="h-full rounded-full bg-pink-500 transition-all duration-300"
        :style="{ width: progress + '%' }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    required: true,
  },
});
</script>