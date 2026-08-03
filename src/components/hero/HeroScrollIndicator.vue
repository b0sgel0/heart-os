<template>
  <div class="scroll">
    <span>Scroll</span>

    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</template>

<style scoped>
.scroll{
display:flex;
flex-direction:column;
align-items:center;
gap:14px;
margin-top:70px;
color:var(--muted);
}

.mouse{
width:28px;
height:44px;
border:2px solid rgba(255,255,255,.3);
border-radius:999px;
display:flex;
justify-content:center;
padding-top:8px;
}

.wheel{
width:4px;
height:8px;
border-radius:999px;
background:white;
animation:wheel 2s infinite;
}

@keyframes wheel{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(12px);
opacity:0;
}

}
</style>