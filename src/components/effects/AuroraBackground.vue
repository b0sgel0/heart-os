<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const aurora = ref(null);

function handleMouseMove(e){

  const x=(e.clientX/window.innerWidth-.5)*30;

  const y=(e.clientY/window.innerHeight-.5)*30;

  aurora.value?.style.setProperty("--x",`${x}px`);

  aurora.value?.style.setProperty("--y",`${y}px`);

}

onMounted(()=>{

window.addEventListener("mousemove",handleMouseMove);

});

onBeforeUnmount(()=>{

window.removeEventListener("mousemove",handleMouseMove);

});
</script>

<template>

<div
ref="aurora"
class="aurora"
>

<div class="blob blob1"></div>

<div class="blob blob2"></div>

<div class="blob blob3"></div>

</div>

</template>

<style scoped>

.aurora{

position:fixed;

inset:0;

overflow:hidden;

pointer-events:none;

z-index:-2;

--x:0px;
--y:0px;

transform:
translate(
var(--x),
var(--y)
);

transition:
transform .35s ease;

}

.blob{

position:absolute;

width:430px;
height:430px;

border-radius:50%;

filter:blur(170px);

opacity:.22;

animation:
float 18s ease-in-out infinite;

}

.blob1{

background:
var(--aurora-1);

left:-180px;

top:-180px;

}

.blob2{

background:
var(--aurora-2);

right:-200px;

top:20%;

animation-delay:-6s;

}

.blob3{

background:
var(--aurora-3);

bottom:-220px;

left:35%;

animation-delay:-12s;

}

@keyframes float{

0%,100%{

transform:
translate(0,0)
scale(1);

}

25%{

transform:
translate(80px,-70px)
scale(1.08);

}

50%{

transform:
translate(-60px,60px)
scale(.92);

}

75%{

transform:
translate(40px,50px)
scale(1.05);

}

}

</style>