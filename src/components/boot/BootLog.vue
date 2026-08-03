<template>

<div class="log">

<p
v-for="line in logs"
:key="line">

> {{ line }}

</p>

</div>

</template>

<script setup>

defineProps({
logs:Array
})

</script>

<style scoped>

.log{

display:flex;
flex-direction:column;

gap:10px;

font-family:monospace;

color:#9ca3af;

font-size:14px;

margin:30px 0;

}

</style>