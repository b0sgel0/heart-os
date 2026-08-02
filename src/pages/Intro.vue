<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GlowBackground from "@/components/ui/GlowBackground.vue";
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
import Title from "@/components/ui/Title.vue";
import Subtitle from "@/components/ui/Subtitle.vue";

const router = useRouter();

const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 150);
});

function start() {
  router.push("/boot");
}
</script>

<template>
  <DefaultLayout>
    <section
      class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <GlowBackground />

      <Transition name="fade">
        <div
          v-if="show"
          class="space-y-6 text-center"
        >
          <div class="text-6xl animate-bounce">
            ❤️
          </div>

          <Title>
            Love You.
          </Title>

          <Subtitle>
            A secret message is waiting for you.
          </Subtitle>

          <div class="pt-4">
            <PrimaryButton @click="start">
              Decrypt Message
            </PrimaryButton>
          </div>
        </div>
      </Transition>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.fade-enter-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>