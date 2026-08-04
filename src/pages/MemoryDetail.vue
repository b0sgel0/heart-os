<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import memories from "@/data/memories";
import AppContainer from "@/components/ui/AppContainer.vue";

const route = useRoute();
const router = useRouter();

const memory = computed(() =>
  memories.find(
    item => item.id === Number(route.params.id)
  )
);
</script>

<template>
  <AppContainer>

    <div v-if="memory">

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

    </div>

    <div
      v-else
      class="not-found"
    >
      <h2>Memory not found 😢</h2>

      <button
        class="back"
        @click="router.push('/memories')"
      >
        Back
      </button>
    </div>

  </AppContainer>
</template>

<style scoped>

.back{

padding:12px 22px;

border:none;

border-radius:999px;

cursor:pointer;

margin-bottom:28px;

background:#202020;

color:white;

}

.cover{

width:100%;

height:380px;

object-fit:cover;

border-radius:24px;

margin-bottom:30px;

}

h1{

font-size:3rem;

margin-bottom:10px;

}

.subtitle{

color:#a1a1aa;

margin-bottom:24px;

}

.meta{

display:flex;

gap:20px;

flex-wrap:wrap;

margin-bottom:32px;

color:#d1d5db;

}

.description{

line-height:2;

white-space:pre-line;

font-size:1.08rem;

}

.not-found{

text-align:center;

padding:80px 0;

}

@media(max-width:768px){

.cover{

height:220px;

}

h1{

font-size:2rem;

}

.meta{

flex-direction:column;

gap:10px;

}

}

</style>