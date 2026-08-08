<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const visible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    visible.value = true;
  });
});

function replay() {
  router.push("/");
}

function backToMemories() {
  router.push("/memories");
}
</script>

<template>
  <main
    class="ending"
    :class="{ visible }"
  >

    <!-- BACKGROUND -->
    <div class="background">
      <div class="glow glow-one"></div>
      <div class="glow glow-two"></div>
      <div class="stars"></div>
    </div>


    <!-- CONTENT -->
    <section class="content">

      <div class="heart">
        ❤️
      </div>

      <span class="eyebrow">
        THE END
      </span>

      <h1>
        And this is only<br />
        <span>the beginning.</span>
      </h1>

      <p class="message">
        Dari sebuah pertemuan sederhana,
        menjadi begitu banyak cerita yang
        layak untuk dikenang.
      </p>

      <p class="message secondary">
        Terima kasih untuk setiap tawa,
        setiap cerita, dan setiap momen
        yang pernah kita lalui.
      </p>


      <!-- DIVIDER -->
      <div class="divider">
        <span></span>
        <i>♥</i>
        <span></span>
      </div>


      <p class="signature">
        Until the next memory...
      </p>


      <!-- ACTIONS -->
      <div class="actions">

        <button
          class="primary-button"
          @click="replay"
        >
          <span>↻</span>
          Replay
        </button>

        <button
          class="secondary-button"
          @click="backToMemories"
        >
          View Memories
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- FOOTER -->
    <footer>
      Made with ❤️ and memories.
    </footer>

  </main>
</template>


<style scoped>

/* ========================================
   ROOT
======================================== */

.ending {
  position: relative;

  min-height: 100vh;

  width: 100%;

  overflow: hidden;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(131, 56, 236, .12),
      transparent 35%
    ),
    #050507;

  color: white;

  opacity: 0;

  transition:
    opacity 1s ease;
}

.ending.visible {
  opacity: 1;
}


/* ========================================
   BACKGROUND
======================================== */

.background {
  position: absolute;

  inset: 0;

  overflow: hidden;

  pointer-events: none;
}


/* ========================================
   GLOW
======================================== */

.glow {
  position: absolute;

  width: 420px;
  height: 420px;

  border-radius: 50%;

  filter: blur(100px);

  opacity: .18;

  animation:
    float 8s ease-in-out infinite;
}

.glow-one {
  top: 5%;
  left: 10%;

  background:
    #ff2d75;
}

.glow-two {
  right: 5%;
  bottom: 5%;

  background:
    #8338ec;

  animation-delay: -4s;
}


/* ========================================
   STARS
======================================== */

.stars {
  position: absolute;

  inset: 0;

  opacity: .35;

  background-image:
    radial-gradient(
      circle,
      rgba(255,255,255,.7) 1px,
      transparent 1px
    );

  background-size:
    80px 80px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent
    );
}


/* ========================================
   CONTENT
======================================== */

.content {
  position: relative;

  z-index: 5;

  width: min(720px, calc(100% - 40px));

  padding: 80px 0;

  text-align: center;

  transform:
    translateY(25px);

  transition:
    transform 1s cubic-bezier(.2,.7,.2,1);
}

.ending.visible .content {
  transform:
    translateY(0);
}


/* ========================================
   HEART
======================================== */

.heart {
  width: 78px;
  height: 78px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin:
    0 auto 25px;

  border-radius: 50%;

  background:
    rgba(255,255,255,.06);

  border:
    1px solid
    rgba(255,255,255,.1);

  backdrop-filter:
    blur(20px);

  font-size: 2.2rem;

  box-shadow:
    0 0 60px
    rgba(255,45,117,.18);

  animation:
    heartbeat 2.4s ease-in-out infinite;
}


/* ========================================
   EYEBROW
======================================== */

.eyebrow {
  display: block;

  margin-bottom: 18px;

  color:
    rgba(255,255,255,.45);

  font-size: .72rem;

  font-weight: 700;

  letter-spacing:
    .35em;
}


/* ========================================
   TITLE
======================================== */

h1 {
  margin: 0;

  font-size:
    clamp(2.8rem, 7vw, 5.5rem);

  line-height: .98;

  letter-spacing:
    -.055em;

  font-weight: 800;
}

h1 span {
  background:
    linear-gradient(
      120deg,
      #ff2d75,
      #8338ec,
      #3a86ff
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}


/* ========================================
   MESSAGE
======================================== */

.message {
  max-width: 570px;

  margin:
    32px auto 0;

  color:
    rgba(255,255,255,.72);

  font-size: 1.05rem;

  line-height: 1.9;
}

.message.secondary {
  margin-top: 8px;

  color:
    rgba(255,255,255,.48);

  font-size: .92rem;
}


/* ========================================
   DIVIDER
======================================== */

.divider {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 14px;

  width: 180px;

  margin:
    35px auto 25px;
}

.divider span {
  flex: 1;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,.18)
    );
}

.divider span:last-child {
  background:
    linear-gradient(
      90deg,
      rgba(255,255,255,.18),
      transparent
    );
}

.divider i {
  color: #ff2d75;

  font-size: .7rem;

  font-style: normal;
}


/* ========================================
   SIGNATURE
======================================== */

.signature {
  margin: 0;

  color:
    rgba(255,255,255,.35);

  font-family:
    Georgia,
    serif;

  font-size: 1rem;

  font-style: italic;
}


/* ========================================
   ACTIONS
======================================== */

.actions {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  margin-top: 35px;
}


/* ========================================
   BUTTON
======================================== */

.primary-button,
.secondary-button {
  min-height: 48px;

  padding:
    0 20px;

  border-radius: 14px;

  font-size: .85rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    transform .25s ease,
    background .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;
}

.primary-button {
  border:
    1px solid
    rgba(255,255,255,.08);

  background:
    linear-gradient(
      120deg,
      #ff2d75,
      #8338ec
    );

  color: white;

  box-shadow:
    0 12px 35px
    rgba(255,45,117,.2);
}

.primary-button:hover {
  transform:
    translateY(-3px)
    scale(1.02);

  box-shadow:
    0 18px 45px
    rgba(255, 45, 117, .3);
}

.primary-button:active {
  transform:
    translateY(0)
    scale(.98);
}

.primary-button span {
  margin-right: 6px;
}


.secondary-button {
  border:
    1px solid
    rgba(255,255,255,.1);

  background:
    rgba(255,255,255,.04);

  color:
    rgba(255,255,255,.75);

  backdrop-filter:
    blur(15px);
}

.secondary-button:hover {
  transform:
    translateY(-3px);

  background:
    rgba(255,255,255,.08);

  border-color:
    rgba(255,255,255,.2);
}

.secondary-button span {
  margin-left: 5px;
}


/* ========================================
   FOOTER
======================================== */

footer {
  position: absolute;

  bottom: 25px;

  left: 0;
  right: 0;

  z-index: 5;

  text-align: center;

  color:
    rgba(255,255,255,.2);

  font-size: .7rem;

  letter-spacing:
    .05em;
}


/* ========================================
   ANIMATIONS
======================================== */

@keyframes float {

  0%,
  100% {
    transform:
      translate3d(0,0,0)
      scale(1);
  }

  50% {
    transform:
      translate3d(20px,-25px,0)
      scale(1.08);
  }

}

@keyframes heartbeat {

  0%,
  100% {
    transform:
      scale(1);
  }

  15% {
    transform:
      scale(1.08);
  }

  30% {
    transform:
      scale(1);
  }

  45% {
    transform:
      scale(1.05);
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .content {
    width:
      calc(100% - 32px);

    padding:
      60px 0;
  }


  .heart {
    width: 66px;
    height: 66px;

    margin-bottom: 22px;

    font-size: 1.9rem;
  }


  .eyebrow {
    font-size: .65rem;

    letter-spacing:
      .28em;
  }


  h1 {
    font-size:
      clamp(2.4rem, 12vw, 4rem);
  }


  .message {
    margin-top: 25px;

    font-size: .92rem;

    line-height: 1.8;
  }


  .message.secondary {
    font-size: .82rem;
  }


  .actions {
    flex-direction: column;

    width: 100%;

    margin-top: 30px;
  }


  .primary-button,
  .secondary-button {
    width: 100%;
  }


  footer {
    bottom: 16px;

    font-size: .62rem;
  }


  .glow {
    width: 260px;
    height: 260px;

    filter: blur(80px);
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .content {
    padding:
      45px 0 65px;
  }


  .heart {
    width: 58px;
    height: 58px;

    font-size: 1.65rem;
  }


  .message {
    max-width:
      320px;
  }


  .divider {
    margin-top: 28px;
    margin-bottom: 20px;
  }

}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {

  .ending,
  .content {
    transition: none;
  }

  .glow,
  .heart {
    animation: none;
  }

}

</style>