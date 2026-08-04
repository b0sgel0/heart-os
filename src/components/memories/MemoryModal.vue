<script setup>
import { onMounted, onBeforeUnmount } from "vue";

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
  if (e.key === "Escape") {
    close();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
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

            <div>

              <h2>
                {{ memory.title }}
              </h2>

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

  padding:40px;

  background:rgba(0,0,0,.75);
  backdrop-filter:blur(20px);

  z-index:999;
}

.modal{

width:min(950px,100%);

overflow:hidden;

border-radius:28px;

background:#101014;

border:1px solid rgba(255,255,255,.08);

box-shadow:0 30px 100px rgba(0,0,0,.45);

}

.cover{

width:100%;

height:420px;

object-fit:cover;

}

.content{

padding:36px;

}

.top{

display:flex;

gap:18px;

align-items:center;

margin-bottom:26px;

}

.emoji{

font-size:3rem;

}

.subtitle{

margin-top:6px;

color:#9ca3af;

}

.meta{

display:flex;

flex-wrap:wrap;

gap:14px;

margin-bottom:24px;

color:#cbd5e1;

}

.favorite{

color:#ff4d8d;

font-weight:600;

}

.description{

line-height:1.9;

color:#d1d5db;

}

.close{

margin-top:30px;

padding:14px 24px;

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

transform:translateY(-2px);

}

.modal-enter-active,
.modal-leave-active{

transition:.35s;

}

.modal-enter-from,
.modal-leave-to{

opacity:0;

transform:scale(.96);

}

</style>