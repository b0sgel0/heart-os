<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import GlowBackground from '@/components/ui/GlowBackground.vue'
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const start = () => {
  router.push('/boot')
}
</script>

<template>
  <DefaultLayout>
    <section
      class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <GlowBackground />

      <h1 class="mb-5 text-6xl font-bold tracking-tight">
        Love You.
      </h1>

      <p class="mb-10 max-w-md text-lg text-zinc-400">
        A secret message is waiting for you.
      </p>

      <PrimaryButton @click="start">
        Decrypt Message
      </PrimaryButton>
    </section>
  </DefaultLayout>
</template>