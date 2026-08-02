<script setup>
defineProps({
center:Boolean
})
</script>

<template>
<p
class="text"
:class="{center}"
>
<slot/>
</p>
</template>

<style scoped>

.text{

font-size:1.05rem;

line-height:1.8;

color:var(--muted);

max-width:720px;

}

.center{

text-align:center;

margin-inline:auto;

}

</style>