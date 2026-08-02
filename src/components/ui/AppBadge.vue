<template>

<span class="badge">

<slot/>

</span>

</template>

<style scoped>

.badge{

display:inline-flex;

padding:8px 16px;

border-radius:999px;

background:rgba(255,255,255,.06);

border:1px solid var(--border);

font-size:.9rem;

}

</style>