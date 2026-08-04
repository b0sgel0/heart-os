<script setup>
import { watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  memory: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

function handleKeydown(e) {
  if (e.key === "Escape" && props.memory) {
    close();
  }
}

/*
|--------------------------------------------------------------------------
| Lock body scroll ONLY when modal is open
|--------------------------------------------------------------------------
*/

watch(
  () => props.memory,
  (value) => {
    document.body.style.overflow = value ? "hidden" : "";
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="memory"
      class="overlay"
      @click.self="close"
    >
      <div class="modal">

        <img
          :src="memory.image"
          :alt="memory.title"
          class="cover"
        />

        <div class="content">

          <div class="top">

            <span class="emoji">
              {{ memory.emoji }}
            </span>

            <div class="heading">

              <h2>{{ memory.title }}</h2>

              <p class="subtitle">
                {{ memory.subtitle }}
              </p>

            </div>

          </div>

          <div class="meta">

            <span>📅 {{ memory.date }}</span>

            <span>📍 {{ memory.location }}</span>

            <span
              v-if="memory.favorite"
              class="favorite"
            >
              ❤️ Favorite
            </span>

          </div>

          <p class="description">
            {{ memory.description }}
          </p>

          <button
            class="close"
            @click="close"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>

.overlay{
position:fixed;
inset:0;

display:flex;
justify-content:center;
align-items:center;

padding:24px;

background:rgba(0,0,0,.78);

backdrop-filter:blur(18px);

z-index:9999;
}

.modal{

width:min(900px,100%);
max-height:90vh;

overflow-y:auto;

background:#101014;

border-radius:28px;

border:1px solid rgba(255,255,255,.08);

box-shadow:0 30px 80px rgba(0,0,0,.45);

}

.modal::-webkit-scrollbar{
width:8px;
}

.modal::-webkit-scrollbar-thumb{
background:#555;
border-radius:999px;
}

.cover{

width:100%;

height:300px;

object-fit:cover;

display:block;

}

.content{

padding:34px;

}

.top{

display:flex;

gap:18px;

align-items:center;

margin-bottom:24px;

}

.emoji{

font-size:3rem;

}

.heading h2{

font-size:2.2rem;

margin-bottom:6px;

}

.subtitle{

color:#9ca3af;

}

.meta{

display:flex;

flex-wrap:wrap;

gap:18px;

margin:24px 0;

padding-bottom:18px;

border-bottom:1px solid rgba(255,255,255,.08);

color:#cbd5e1;

}

.favorite{

color:#ff4d8d;

font-weight:600;

}

.description{

line-height:1.9;

white-space:pre-line;

color:#d1d5db;

}

.close{

margin-top:32px;

padding:14px 28px;

border:none;

border-radius:999px;

cursor:pointer;

background:linear-gradient(
90deg,
#ff4d8d,
#8b5cf6
);

color:white;

font-weight:600;

transition:.3s;

}

.close:hover{

transform:translateY(-3px);

}

.modal-enter-active,
.modal-leave-active{

transition:.35s ease;

}

.modal-enter-from,
.modal-leave-to{

opacity:0;

transform:scale(.95);

}

@media(max-width:768px){

.overlay{

padding:12px;

align-items:flex-end;

}

.modal{

width:100%;

max-height:92vh;

border-radius:22px 22px 0 0;

}

.cover{

height:220px;

}

.content{

padding:22px;

}

.top{

align-items:flex-start;

}

.heading h2{

font-size:1.8rem;

}

.meta{

flex-direction:column;

gap:10px;

}

.close{

width:100%;

}

}

</style>