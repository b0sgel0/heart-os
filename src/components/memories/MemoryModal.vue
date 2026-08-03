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
          class="hero-image"
        />

        <div class="content">

          <span class="date">
            {{ memory.date }}
          </span>

          <h2>
            {{ memory.emoji }}
            {{ memory.title }}
          </h2>

          <p>
            {{ memory.description }}
          </p>

          <button
            class="close-btn"
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

  background:rgba(0,0,0,.72);
  backdrop-filter:blur(18px);

  z-index:999;
}

.modal{

width:min(900px,100%);

background:rgba(20,20,25,.96);

border:1px solid rgba(255,255,255,.08);

border-radius:28px;

overflow:hidden;

box-shadow:
0 40px 100px rgba(0,0,0,.45);

}

.hero-image{

width:100%;

height:380px;

object-fit:cover;

}

.content{

padding:36px;

}

.date{

display:block;

margin-bottom:10px;

color:#999;

font-size:.9rem;

}

h2{

font-size:2rem;

margin-bottom:20px;

}

p{

line-height:1.8;

color:#d1d5db;

}

.close-btn{

margin-top:32px;

padding:14px 26px;

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

.close-btn:hover{

transform:translateY(-2px);

}

.modal-enter-active,
.modal-leave-active{

transition:.35s;

}

.modal-enter-from,
.modal-leave-to{

opacity:0;
transform:scale(.95);

}

</style>