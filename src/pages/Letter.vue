<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LetterCard from "@/components/ui/LetterCard.vue";
import PrimaryButton from "@/components/ui/PrimaryButton.vue";

const router = useRouter();

const opened = ref(false);

function openLetter() {
  opened.value = true;
}

function nextPage() {
  router.push("/memories");
}

import { watch } from "vue";
import { useTypewriter } from "@/composables/useTypewriter";

const message = `Terima kasih telah membuka surat ini.

Website ini dibuat dengan penuh semangat menggunakan Vue.js.

Semoga hari kamu selalu menyenangkan ❤️`;

const {
  output,
  start,
} = useTypewriter(message, 35);

watch(opened, (value) => {
  if (value) {
    start();
  }
});
</script>

<template>
  <DefaultLayout>
    <section
      class="flex min-h-screen items-center justify-center px-6"
    >
      <div v-if="!opened" class="text-center space-y-6">

        <div class="text-8xl">
          💌
        </div>

        <h1 class="text-4xl font-bold text-white">
          Secret Message
        </h1>

        <PrimaryButton @click="openLetter">
          Open Letter
        </PrimaryButton>

      </div>

      <LetterCard v-else>

  <div class="mb-8 text-center">

    <div class="text-5xl">
      💌
    </div>

    <h1 class="mt-4 text-4xl font-bold">
      Dear ❤️,
    </h1>

  </div>

  <p
    class="whitespace-pre-line text-lg leading-9"
  >
    {{ output }}
  </p>

  <div class="mt-12">

    <p class="font-semibold">
      With Love ❤️
    </p>

    <p class="text-sm text-zinc-500">
      {{ new Date().toLocaleDateString("id-ID") }}
    </p>

  </div>

  <div class="mt-10 flex justify-end">

    <PrimaryButton @click="nextPage">
      Continue →
    </PrimaryButton>

  </div>

</LetterCard>
    </section>
  </DefaultLayout>
</template>