<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProgressBar from "@/components/ui/ProgressBar.vue";

const router = useRouter();

const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    progress.value++;

    if (progress.value >= 100) {
      clearInterval(interval);

      setTimeout(() => {
        router.push("/letter");
      }, 800);
    }
  }, 40);
});
</script>

<template>
  <DefaultLayout>
    <section
      class="flex min-h-screen flex-col items-center justify-center gap-8 px-6"
    >
      <h1 class="text-3xl font-bold text-white">
        🔒 Decrypting Secure Message...
      </h1>

      <ProgressBar :progress="progress" />

      <h2 class="text-5xl font-bold text-pink-400">
        {{ progress }}%
      </h2>

      <p class="text-zinc-400">
        Please wait...
      </p>
    </section>
  </DefaultLayout>
</template>