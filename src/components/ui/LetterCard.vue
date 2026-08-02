<template>
  <div
    class="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-pink-200/30 bg-white p-10 text-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,.35)]"
  >
    <!-- Decorative Glow -->
    <div
      class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink-200 opacity-40 blur-3xl"
    />

    <div
      class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-rose-100 opacity-50 blur-3xl"
    />

    <div class="relative">
      <slot />
    </div>
  </div>
</template>