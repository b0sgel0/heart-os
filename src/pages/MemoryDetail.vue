<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import memories from "@/data/memories";
import AppContainer from "@/components/ui/AppContainer.vue";

const route = useRoute();
const router = useRouter();

const memory = computed(() =>
  memories.find(
    item => item.id === Number(route.params.id)
  )
);

const currentIndex = computed(() =>
  memories.findIndex(
    item => item.id === Number(route.params.id)
  )
);

const previousMemory = computed(() => {
  if (currentIndex.value <= 0) return null;

  return memories[currentIndex.value - 1];
});

const nextMemory = computed(() => {
  if (
    currentIndex.value < 0 ||
    currentIndex.value >= memories.length - 1
  ) {
    return null;
  }

  return memories[currentIndex.value + 1];
});

const isLastMemory = computed(() => {
  return (
    currentIndex.value === memories.length - 1
  );
});

const themeStyle = computed(() => {
  if (!memory.value) return {};

  return {
    "--theme-a": memory.value.theme.a,
    "--theme-b": memory.value.theme.b,
    "--theme-c": memory.value.theme.c,
  };
});
</script>

<template>
  <AppContainer :style="themeStyle">

    <!-- MEMORY FOUND -->
    <div v-if="memory" class="memory-detail">

      <!-- HERO -->
      <section class="hero">

        <button
          class="back"
          @click="router.back()"
          aria-label="Kembali"
        >
          ←
        </button>

        <img
          :src="memory.image"
          :alt="memory.title"
          class="cover"
        />

        <div class="overlay"></div>

        <div class="hero-content">

          <span class="hero-emoji">
            {{ memory.emoji }}
          </span>

          <h1>
            {{ memory.title }}
          </h1>

          <p>
            {{ memory.subtitle }}
          </p>

        </div>

      </section>


      <!-- META -->
      <div class="meta">

        <span>
          📅 {{ memory.date }}
        </span>

        <span>
          📍 {{ memory.location }}
        </span>

        <span
          v-if="memory.favorite"
          class="favorite"
        >
          ❤️ Favorite
        </span>

      </div>


      <!-- DIVIDER -->
      <div class="divider"></div>


      <!-- DESCRIPTION -->
      <article class="description">
        {{ memory.description }}
      </article>


      <!-- NAVIGATION -->
      <nav class="memory-navigation">

        <!-- PREVIOUS -->
        <button
          v-if="previousMemory"
          class="nav-card"
          @click="
            router.push(`/memories/${previousMemory.id}`)
          "
        >

          <small>
            ← Previous
          </small>

          <strong>
            {{ previousMemory.title }}
          </strong>

        </button>

        <div
          v-else
          class="nav-spacer"
        ></div>


        <!-- NEXT -->
        <button
  v-if="nextMemory"
  class="nav-card next"
  @click="
    router.push(`/memories/${nextMemory.id}`)
  "
>
  <small>
    Next →
  </small>

  <strong>
    {{ nextMemory.title }}
  </strong>
</button>

<button
  v-else-if="isLastMemory"
  class="nav-card ending-card"
  @click="router.push('/ending')"
>
  <small>
    Continue →
  </small>

  <strong>
    The Final Chapter ❤️
  </strong>
</button>

      </nav>

    </div>


    <!-- NOT FOUND -->
    <div
      v-else
      class="not-found"
    >

      <div class="not-found-icon">
        😢
      </div>

      <h2>
        Memory not found
      </h2>

      <p>
        Memory yang kamu cari tidak tersedia.
      </p>

      <button
        class="not-found-button"
        @click="router.push('/memories')"
      >
        ← Back to Memories
      </button>

    </div>

  </AppContainer>
</template>


<style scoped>

/* ========================================
   MEMORY DETAIL
======================================== */

.memory-detail {
  width: 100%;
}


/* ========================================
   HERO
======================================== */

.hero {
  position: relative;

  width: 100%;

  margin-bottom: 32px;

  overflow: hidden;

  border-radius: 28px;

  background: #111;

  box-shadow:
    0 30px 80px
    color-mix(
      in srgb,
      var(--theme-a) 30%,
      transparent
    );

  isolation: isolate;
}


/* ========================================
   COVER
======================================== */

.cover {
  width: 100%;

  height: 520px;

  display: block;

  object-fit: cover;

  object-position: center;

  transition:
    transform .8s ease;
}


/* ========================================
   HERO OVERLAY
======================================== */

.overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, .72) 0%,
      rgba(0, 0, 0, .25) 50%,
      rgba(0, 0, 0, .05) 100%
    );

  pointer-events: none;
}


/* ========================================
   HERO CONTENT
======================================== */

.hero-content {
  position: absolute;

  left: 40px;
  bottom: 36px;

  z-index: 5;

  max-width: 80%;

  padding: 0;
}


/* ========================================
   EMOJI
======================================== */

.hero-emoji {
  display: block;

  font-size: 3rem;

  line-height: 1;

  margin-bottom: 12px;

  filter:
    drop-shadow(
      0 8px 20px
      rgba(0, 0, 0, .3)
    );
}


/* ========================================
   TITLE
======================================== */

.hero-content h1 {
  margin: 0 0 10px;

  color: white;

  font-size: 3rem;

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -.03em;

  text-shadow:
    0 5px 20px
    rgba(0, 0, 0, .35);
}


/* ========================================
   SUBTITLE
======================================== */

.hero-content p {
  margin: 0;

  color: rgba(255, 255, 255, .85);

  font-size: 1.1rem;

  line-height: 1.5;

  text-shadow:
    0 3px 12px
    rgba(0, 0, 0, .35);
}


/* ========================================
   BACK BUTTON
======================================== */

.back {
  position: absolute;

  top: 24px;
  left: 24px;

  z-index: 20;

  width: 52px;
  height: 52px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 1px solid
    rgba(255, 255, 255, .15);

  border-radius: 50%;

  background:
    rgba(255, 255, 255, .15);

  backdrop-filter:
    blur(20px);

  color: white;

  font-size: 1.4rem;

  cursor: pointer;

  transition:
    transform .25s ease,
    background .25s ease,
    border-color .25s ease;
}

.back:hover {
  transform: scale(1.08);

  background:
    rgba(255, 255, 255, .25);

  border-color:
    rgba(255, 255, 255, .3);
}


/* ========================================
   HERO HOVER
======================================== */

.hero:hover .cover {
  transform: scale(1.035);
}


/* ========================================
   META
======================================== */

.meta {
  display: flex;

  align-items: center;

  gap: 20px;

  flex-wrap: wrap;

  margin-bottom: 28px;

  color: #d1d5db;

  font-size: .95rem;
}

.meta span {
  display: inline-flex;

  align-items: center;

  gap: 5px;
}


/* ========================================
   FAVORITE
======================================== */

.favorite {
  color: var(--theme-a);

  font-weight: 700;

  text-shadow:
    0 0 20px
    color-mix(
      in srgb,
      var(--theme-a) 35%,
      transparent
    );
}


/* ========================================
   DIVIDER
======================================== */

.divider {
  width: 100%;

  height: 1px;

  margin-bottom: 34px;

  background:
    linear-gradient(
      90deg,
      color-mix(
        in srgb,
        var(--theme-a) 30%,
        transparent
      ),
      rgba(255, 255, 255, .08),
      transparent
    );
}


/* ========================================
   DESCRIPTION
======================================== */

.description {
  max-width: 900px;

  margin: 0;

  color: #e4e4e7;

  font-size: 1.08rem;

  line-height: 2;

  white-space: pre-line;
}


/* ========================================
   NAVIGATION
======================================== */

.memory-navigation {
  display: flex;

  justify-content: space-between;

  gap: 20px;

  margin-top: 70px;

  padding-bottom: 40px;
}


/* ========================================
   NAV CARD
======================================== */

.nav-card {
  flex: 1;

  min-width: 0;

  padding: 20px;

  border: 1px solid
    rgba(255, 255, 255, .08);

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      color-mix(
        in srgb,
        var(--theme-a) 8%,
        rgba(255, 255, 255, .04)
      ),
      rgba(255, 255, 255, .03)
    );

  backdrop-filter:
    blur(16px);

  color: white;

  text-align: left;

  cursor: pointer;

  transition:
    transform .3s ease,
    border-color .3s ease,
    box-shadow .3s ease,
    background .3s ease;
}

.nav-card:hover {
  transform: translateY(-5px);

  border-color:
    color-mix(
      in srgb,
      var(--theme-a) 60%,
      transparent
    );

  background:
    color-mix(
      in srgb,
      var(--theme-a) 8%,
      rgba(255, 255, 255, .05)
    );

  box-shadow:
    0 20px 45px
    color-mix(
      in srgb,
      var(--theme-a) 18%,
      transparent
    );
}


/* ========================================
   NAV TEXT
======================================== */

.nav-card small {
  display: block;

  margin-bottom: 8px;

  color: #9ca3af;

  font-size: .8rem;
}

.nav-card strong {
  display: block;

  color: white;

  font-size: 1rem;
}


/* ========================================
   NOT FOUND
======================================== */

.not-found {
  min-height: 500px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  padding: 80px 20px;
}

.not-found-icon {
  font-size: 4rem;

  margin-bottom: 20px;
}

.not-found h2 {
  margin: 0 0 10px;

  color: white;

  font-size: 2rem;
}

.not-found p {
  margin: 0 0 25px;

  color: #9ca3af;
}

.not-found-button {
  padding: 12px 20px;

  border: 1px solid
    rgba(255, 255, 255, .1);

  border-radius: 14px;

  background:
    rgba(255, 255, 255, .06);

  color: white;

  cursor: pointer;

  transition: .25s;
}

.not-found-button:hover {
  transform: translateY(-2px);

  background:
    rgba(255, 255, 255, .1);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .cover {
    height: 420px;
  }

  .hero-content {
    left: 30px;
    bottom: 30px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .hero {
    margin-bottom: 24px;

    border-radius: 22px;
  }


  /* FOTO */

  .cover {
    height: 300px;

    object-fit: cover;

    object-position: center;
  }


  /* BACK */

  .back {
    top: 14px;
    left: 14px;

    width: 44px;
    height: 44px;

    font-size: 1.15rem;
  }


  /* HERO CONTENT */

  .hero-content {
    left: 16px;
    right: auto;

    bottom: 16px;

    width: max-content;

    max-width:
      calc(100% - 32px);

    padding: 13px 16px;

    border-radius: 17px;

    background:
      rgba(20, 20, 25, .48);

    border:
      1px solid
      rgba(255, 255, 255, .08);

    backdrop-filter:
      blur(16px);

    box-shadow:
      0 15px 35px
      rgba(0, 0, 0, .18);
  }


  /* EMOJI */

  .hero-emoji {
    font-size: 1.75rem;

    margin-bottom: 6px;
  }


  /* TITLE */

  .hero-content h1 {
    margin-bottom: 5px;

    font-size: 1.5rem;

    line-height: 1.1;
  }


  /* SUBTITLE */

  .hero-content p {
    font-size: .84rem;

    line-height: 1.4;

    color:
      rgba(255, 255, 255, .78);
  }


  /* META */

  .meta {
    gap: 10px 16px;

    margin-bottom: 22px;

    font-size: .82rem;
  }


  /* DIVIDER */

  .divider {
    margin-bottom: 25px;
  }


  /* DESCRIPTION */

  .description {
    font-size: .96rem;

    line-height: 1.85;
  }


  /* NAVIGATION */

  .memory-navigation {
    flex-direction: column;

    gap: 12px;

    margin-top: 45px;

    padding-bottom: 25px;
  }

  .nav-card {
    width: 100%;

    padding: 17px;

    border-radius: 17px;
  }

  .nav-card strong {
    font-size: .95rem;
  }

  .nav-spacer {
    display: none;
  }

}

.ending-card {
  background:
    linear-gradient(
      135deg,
      color-mix(
        in srgb,
        var(--theme-a) 12%,
        rgba(255, 255, 255, .04)
      ),
      color-mix(
        in srgb,
        var(--theme-b) 8%,
        rgba(255, 255, 255, .03)
      )
    );

  border-color:
    color-mix(
      in srgb,
      var(--theme-a) 30%,
      rgba(255, 255, 255, .08)
    );
}

.ending-card small {
  color:
    var(--theme-a);
}

.ending-card:hover {
  box-shadow:
    0 20px 50px
    color-mix(
      in srgb,
      var(--theme-a) 22%,
      transparent
    );
}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .hero {
    border-radius: 18px;
  }


  .cover {
    height: 280px;
  }


  .hero-content {
    left: 12px;

    bottom: 12px;

    max-width:
      calc(100% - 24px);

    padding: 11px 13px;

    border-radius: 15px;
  }


  .hero-emoji {
    font-size: 1.55rem;

    margin-bottom: 5px;
  }


  .hero-content h1 {
    font-size: 1.3rem;
  }


  .hero-content p {
    font-size: .78rem;
  }


  .meta {
    gap: 8px 12px;

    font-size: .76rem;
  }


  .description {
    font-size: .92rem;

    line-height: 1.8;
  }

}
</style>