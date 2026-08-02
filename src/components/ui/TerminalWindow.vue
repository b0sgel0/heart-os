<template>
  <div
    class="w-full max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl"
  >
    <!-- Header -->
    <div
      class="flex items-center gap-2 border-b border-zinc-700 px-4 py-3"
    >
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div class="h-3 w-3 rounded-full bg-green-500"></div>

      <span class="ml-4 text-sm text-zinc-400">
        Heart.OS
      </span>
    </div>

    <!-- Body -->
    <div class="p-6 font-mono text-green-400">
      <slot />
    </div>
  </div>
</template>