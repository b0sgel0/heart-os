<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TerminalWindow from "@/components/ui/TerminalWindow.vue";

const router = useRouter();

const lines = ref([]);

const bootSequence = [
  "Initializing...",
  "Loading Memories...",
  "Loading Emotions...",
  "Decrypting Love Letter...",
  "Access Granted ❤️",
];

onMounted(() => {
  let index = 0;

  const interval = setInterval(() => {
    if (index < bootSequence.length) {
      lines.value.push(bootSequence[index]);
      index++;
    } else {
      clearInterval(interval);

      setTimeout(() => {
        router.push("/decrypt");
      }, 1200);
    }
  }, 800);
});
</script>

<template>
  <DefaultLayout>
    <section
      class="flex min-h-screen items-center justify-center px-6"
    >
     <TerminalWindow>

  <p class="mb-6 text-pink-400">
    ♥ Heart.OS v1.0
  </p>

  <div
    v-for="(line, index) in lines"
    :key="index"
    class="mb-2"
  >
    > {{ line }}
  </div>

  <div class="animate-pulse">
    █
  </div>

</TerminalWindow>
    </section>
  </DefaultLayout>
</template>