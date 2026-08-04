<script setup>
const emit = defineEmits(["open"]);
</script>

<template>
  <div class="envelope" @click="$emit('open')">
    <div class="flap"></div>

    <div class="paper">
      ❤️
    </div>
  </div>
</template>

<style scoped>
.envelope{
width:320px;
height:220px;
margin:auto;
cursor:pointer;
position:relative;
perspective:1000px;
}

.paper{
position:absolute;
left:50%;
top:25px;
transform:translateX(-50%);
width:240px;
height:150px;
background:white;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;
transition:.5s;
}

.flap{
position:absolute;
width:100%;
height:100%;
background:#ff4d8d;
clip-path:polygon(0 0,100% 0,50% 60%);
transition:.5s;
}

.envelope:hover .flap{
transform:rotateX(180deg);
transform-origin:top;
}

.envelope:hover .paper{
transform:
translateX(-50%)
translateY(-70px);
}
</style>