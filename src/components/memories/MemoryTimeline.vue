<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import memories from "@/data/memories";
import MemoryCard from "./MemoryCard.vue";

let observer;

onMounted(() => {
  const items = document.querySelectorAll(".timeline-item");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Sudah muncul → tidak perlu diamati lagi
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section class="timeline">

    <div
      v-for="item in memories"
      :key="item.id"
      class="timeline-item"
      :style="{
        '--theme-a': item.theme?.a || '#ff2d75',
        '--theme-b': item.theme?.b || '#8338ec',
      }"
    >

      <!-- TIMELINE LINE -->
      <div class="timeline-line"></div>

      <!-- DOT -->
      <div class="dot">
        <span></span>
      </div>

      <!-- MEMORY -->
      <MemoryCard
        v-bind="item"
      />

    </div>

  </section>
</template>


<style scoped>

/* ========================================
   TIMELINE
======================================== */

.timeline {
  position: relative;

  width: 100%;

  padding: 20px 0 80px;
}


/* ========================================
   ITEM
======================================== */

.timeline-item {
  position: relative;

  display: grid;

  grid-template-columns: 54px minmax(0, 1fr);

  gap: 24px;

  width: 100%;

  margin-bottom: 45px;

  /* INITIAL STATE */

  opacity: 0;

  transform:
    translateY(45px)
    scale(.97);

  filter: blur(5px);

  transition:
    opacity .7s ease,
    transform .7s cubic-bezier(.2,.7,.2,1),
    filter .7s ease;
}


/* ========================================
   VISIBLE
======================================== */

.timeline-item.visible {
  opacity: 1;

  transform:
    translateY(0)
    scale(1);

  filter: blur(0);
}


/* ========================================
   STAGGER
======================================== */

.timeline-item:nth-child(2) {
  transition-delay: .08s;
}

.timeline-item:nth-child(3) {
  transition-delay: .12s;
}

.timeline-item:nth-child(4) {
  transition-delay: .16s;
}

.timeline-item:nth-child(5) {
  transition-delay: .2s;
}


/* ========================================
   TIMELINE LINE
======================================== */

.timeline-line {
  position: absolute;

  top: 54px;
  bottom: -45px;

  left: 26px;

  width: 1px;

  background:
    linear-gradient(
      to bottom,
      color-mix(
        in srgb,
        var(--theme-a) 55%,
        transparent
      ),
      rgba(255, 255, 255, .08)
    );

  pointer-events: none;
}


.timeline-item:last-child {
  margin-bottom: 0;
}


.timeline-item:last-child .timeline-line {
  display: none;
}


/* ========================================
   DOT
======================================== */

.dot {
  position: relative;

  z-index: 3;

  width: 54px;
  height: 54px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    color-mix(
      in srgb,
      var(--theme-a) 12%,
      rgba(255, 255, 255, .04)
    );

  border:
    1px solid
    color-mix(
      in srgb,
      var(--theme-a) 45%,
      rgba(255, 255, 255, .08)
    );

  backdrop-filter:
    blur(16px);

  box-shadow:
    0 10px 30px
    color-mix(
      in srgb,
      var(--theme-a) 18%,
      transparent
    );
}


/* ========================================
   DOT CENTER
======================================== */

.dot span {
  width: 10px;
  height: 10px;

  border-radius: 50%;

  background:
    var(--theme-a);

  box-shadow:
    0 0 18px
    var(--theme-a);

  transition:
    transform .3s ease;
}


.timeline-item:hover .dot span {
  transform:
    scale(1.45);
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .timeline {
    padding-top: 10px;

    padding-bottom: 50px;
  }


  .timeline-item {

    grid-template-columns:
      32px minmax(0, 1fr);

    gap: 12px;

    margin-bottom: 28px;
  }


  .timeline-line {

    top: 32px;

    bottom: -28px;

    left: 15px;
  }


  .dot {

    width: 32px;
    height: 32px;
  }


  .dot span {

    width: 7px;
    height: 7px;
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .timeline-item {

    grid-template-columns:
      24px minmax(0, 1fr);

    gap: 8px;
  }


  .timeline-line {

    left: 11px;

    top: 24px;

    bottom: -28px;
  }


  .dot {

    width: 24px;
    height: 24px;
  }


  .dot span {

    width: 6px;
    height: 6px;
  }

}


/* ========================================
   REDUCE MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {

  .timeline-item {

    opacity: 1;

    transform: none;

    filter: none;

    transition: none;
  }

}

</style>