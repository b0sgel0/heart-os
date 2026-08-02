<template>
  <button
    class="group relative overflow-hidden rounded-xl border border-pink-500/30 bg-pink-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-400 active:scale-95"
  >
    <span class="relative z-10">
      <slot />
    </span>

    <div
      class="absolute inset-0 bg-white/20 opacity-0 transition duration-300 group-hover:opacity-100"
    />
  </button>
</template>