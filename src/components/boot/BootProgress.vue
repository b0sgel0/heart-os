<template>

<div class="progress">

<div class="bar">

<div
class="fill"
:style="{width: progress + '%'}"
/>

</div>

<p>{{ progress }}%</p>

</div>

</template>

<script setup>

defineProps({
progress:Number
})

</script>

<style scoped>

.progress{
display:flex;
flex-direction:column;
gap:12px;
}

.bar{
height:8px;
background:#222;
border-radius:999px;
overflow:hidden;
}

.fill{
height:100%;
background:linear-gradient(
90deg,
#ff4d8d,
#8b5cf6
);

transition:width .4s;
}

p{
font-family:monospace;
font-size:13px;
color:#aaa;
}

</style>