<template>

<div class="card">

<slot/>

</div>

</template>

<style scoped>

.card{

background:var(--surface);

border:1px solid var(--border);

border-radius:28px;

padding:32px;

backdrop-filter:blur(24px);

}

</style>