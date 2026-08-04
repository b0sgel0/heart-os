<script setup>
defineProps({
  icon: String,
  active: Boolean,
});

defineEmits(["click"]);
</script>

<template>
  <button
    class="dock-item"
    :class="{ active }"
    @click="$emit('click')"
  >
    <span>{{ icon }}</span>
  </button>
</template>

<style scoped>
.dock-item{
  width:58px;
  height:58px;

  border:none;
  border-radius:18px;

  background:rgba(255,255,255,.06);
  backdrop-filter:blur(20px);

  color:white;

  font-size:1.5rem;

  cursor:pointer;

  transition:.25s;

  display:flex;
  justify-content:center;
  align-items:center;
}

.dock-item:hover{
  transform:translateY(-6px) scale(1.08);
  background:rgba(255,255,255,.12);
}

.active{
  border:1px solid #ff4d8d;
  box-shadow:0 0 20px rgba(255,77,141,.3);
}

@media(max-width:767px){

.dock-item{

width:52px;
height:52px;

}

}
</style>