<script setup>
defineProps({
  memory: Object,
});

defineEmits(["close"]);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="memory"
      class="overlay"
      @click.self="$emit('close')"
    >
      <div class="modal">

        <img
          :src="memory.image"
          :alt="memory.title"
        />

        <div class="content">

          <span>{{ memory.date }}</span>

          <h2>
            {{ memory.emoji }}
            {{ memory.title }}
          </h2>

          <p>
            {{ memory.description }}
          </p>

          <button @click="$emit('close')">
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

  background:rgba(0,0,0,.7);
  backdrop-filter:blur(18px);

  display:flex;
  justify-content:center;
  align-items:center;

  padding:32px;

  z-index:1000;
}

.modal{
  width:min(900px,100%);
  background:#111827;

  border-radius:24px;

  overflow:hidden;
}

img{
  width:100%;
  height:360px;
  object-fit:cover;
}

.content{
  padding:32px;
}

button{
  margin-top:24px;
}
</style>