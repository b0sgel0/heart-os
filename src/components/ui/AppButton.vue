<template>

<button class="button">

<slot/>

</button>

</template>

<style scoped>

.button{

display:inline-flex;

align-items:center;

justify-content:center;

padding:16px 34px;

border:none;

border-radius:999px;

cursor:pointer;

background:

linear-gradient(

135deg,

var(--primary),

var(--secondary)

);

color:white;

font-weight:600;

transition:.35s;

box-shadow:

0 12px 35px rgba(255,77,141,.35);

}

.button:hover{

transform:translateY(-4px);

box-shadow:

0 20px 60px rgba(255,77,141,.5);

}

</style>