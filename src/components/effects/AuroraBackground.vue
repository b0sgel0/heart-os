<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const aurora = ref(null);

const handleMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  aurora.value?.style.setProperty("--x", `${x}px`);
  aurora.value?.style.setProperty("--y", `${y}px`);
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>
<template>
  <div ref="aurora" class="aurora">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
</template>

<style scoped>
.aurora{
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: -1;

  background: var(--bg);

  --x: 0px;
  --y: 0px;

  transform: translate(var(--x), var(--y));
  transition: transform .35s ease-out;
}

.blob {
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .45;

  will-change: transform;

  animation: float 16s ease-in-out infinite;
}

.blob-1 {
  background: #ff4d8d;
  top: -180px;
  left: -120px;
}

.blob-2 {
  background: #8b5cf6;
  right: -180px;
  top: 20%;
  animation-delay: -5s;
}

.blob-3 {
  background: #67e8f9;
  bottom: -180px;
  left: 35%;
  animation-delay: -10s;
}

@keyframes float {
  0%,100%{
    transform:translate(0,0) scale(1);
  }

  25%{
    transform:translate(80px,-60px) scale(1.1);
  }

  50%{
    transform:translate(-60px,70px) scale(.9);
  }

  75%{
    transform:translate(40px,40px) scale(1.05);
  }
}
</style>