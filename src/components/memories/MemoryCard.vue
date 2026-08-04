<script setup>
import { useTilt } from "@/composables/useTilt";
import { useRouter } from "vue-router";

const router = useRouter();

useTilt(".card");


defineProps({
  id: Number,
  title: String,
  date: String,
  emoji: String,
  description: String,
  image: String,
});
</script>

<template>
  <article
    class="card"
    @click="router.push(`/memories/${id}`)"
  >
    <img
      :src="image"
      :alt="title"
      class="thumbnail"
    />

    <div class="emoji">
      {{ emoji }}
    </div>

    <h3>{{ title }}</h3>

    <small>{{ date }}</small>

    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.card{
  background: rgba(255,255,255,.05);

  backdrop-filter: blur(24px);

  border:1px solid rgba(255,255,255,.08);

  border-radius:24px;

  padding:24px;

  cursor:pointer;

  transform-style: preserve-3d;

  will-change: transform;

  transition:
    transform .25s ease,
    border-color .35s,
    box-shadow .35s;
}

.card:hover{
  border-color:#ff4d8d;

  box-shadow:
    0 20px 60px rgba(255,77,141,.18);
}


.emoji{
  font-size:2rem;
  margin-bottom:16px;
}

h3{
  margin-bottom:8px;
}

small{
  color:#999;
}

p{
  margin-top:16px;
  color:#bdbdbd;
  line-height:1.7;
}

.thumbnail{
  width:100%;
  height:220px;

  object-fit:cover;

  border-radius:18px;

  margin-bottom:22px;

  transition:
    transform .5s ease,
    filter .5s ease;
}

.card:hover .thumbnail{
  transform:scale(1.05);
  filter:brightness(1.05);
}

@media (max-width:767px){

.thumbnail{

height:180px;

}

.card{

padding:20px;

border-radius:18px;

}

h3{

font-size:1.1rem;

}

}
</style>