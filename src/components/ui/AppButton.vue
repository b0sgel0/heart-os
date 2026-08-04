<template>

<button class="button">

<slot/>

</button>

</template>

<style scoped>

.button {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:16px 34px;
  border:none;
  border-radius:999px;
  cursor:pointer;

  min-height:52px;

padding:16px 30px;

touch-action:manipulation;

  position:relative;
  overflow:hidden;

  background:linear-gradient(
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

.button::before{
  content:"";
  position:absolute;
  inset:0;

  background:linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,.25),
    transparent
  );

  transform:translateX(-120%);
  transition:transform .6s ease;
}

.button:hover::before{
  transform:translateX(120%);
}

@media (max-width:767px){

.button{

width:100%;

}

}

</style>