<template>
  <div class="scroll">
    Scroll
    <span>↓</span>
  </div>
</template>

<style scoped>
.scroll{
  margin-top:80px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
  color:var(--muted);
  font-size:.9rem;
}

.scroll span{
  animation:bounce 2s infinite;
}

@keyframes bounce{

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(8px);
}

}
</style>