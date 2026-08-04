<template>
  <div class="boot">
    <BootHeader />

    <BootProgress :progress="progress" />

    <BootLog :logs="logs" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMusicStore } from "@/stores/music";

import BootHeader from "./BootHeader.vue";
import BootProgress from "./BootProgress.vue";
import BootLog from "./BootLog.vue";

const router = useRouter();

const music = useMusicStore();

const progress = ref(0);
const logs = ref([]);

const bootSteps = [
  "Initializing...",
  "Loading Memories...",
  "Decrypting Emotions...",
  "Access Granted ❤️"
];

onMounted(() => {
  let index = 0;

  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 2;
    }

    if (
      progress.value >= (index + 1) * 25 &&
      index < bootSteps.length
    ) {
      logs.value.push(bootSteps[index]);
      index++;
    }

     if (progress.value >= 100) {
     clearInterval(interval);

     setTimeout(async () => {
  await music.play();

  router.push("/memories");
}, 1000);
     }
  }, 60);
});
</script>