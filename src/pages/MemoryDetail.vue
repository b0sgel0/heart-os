<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import memories from "@/data/memories";
import AppContainer from "@/components/ui/AppContainer.vue";

const route = useRoute();
const router = useRouter();

const memory = computed(() =>
  memories.find(
    (item) => item.id === Number(route.params.id)
  )
);
</script>

<template>
  <AppContainer v-if="memory">

    <button
      class="back"
      @click="router.back()"
    >
      ← Back
    </button>

    <img
      :src="memory.image"
      :alt="memory.title"
      class="cover"
    />

    <h1>
      {{ memory.emoji }}
      {{ memory.title }}
    </h1>

    <p class="subtitle">
      {{ memory.subtitle }}
    </p>

    <div class="meta">
      <span>📅 {{ memory.date }}</span>
      <span>📍 {{ memory.location }}</span>

      <span v-if="memory.favorite">
        ❤️ Favorite
      </span>
    </div>

    <article class="description">
      {{ memory.description }}
    </article>

  </AppContainer>
</template>

<style scoped>

.back{

margin-bottom:24px;

padding:12px 22px;

border:none;

border-radius:999px;

cursor:pointer;

background:#222;

color:white;

}

.cover{

width:100%;

height:380px;

object-fit:cover;

border-radius:24px;

margin-bottom:28px;

}

h1{

font-size:3rem;

margin-bottom:10px;

}

.subtitle{

color:#9ca3af;

margin-bottom:20px;

}

.meta{

display:flex;

gap:20px;

flex-wrap:wrap;

margin-bottom:30px;

color:#cbd5e1;

}

.description{

line-height:2;

font-size:1.1rem;

white-space:pre-line;

}

@media(max-width:768px){

.cover{

height:220px;

}

h1{

font-size:2rem;

}

}

</style>