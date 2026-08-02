<script setup>
defineProps({
value:Number
})
</script>

<template>

<div class="progress">

<div
class="fill"
:style="{
width:value+'%'
}"
></div>

</div>

</template>

<style scoped>

.progress{

height:8px;

background:rgba(255,255,255,.08);

border-radius:999px;

overflow:hidden;

}

.fill{

height:100%;

background:

linear-gradient(

90deg,

var(--primary),

var(--secondary)

);

transition:.4s;

}

</style>