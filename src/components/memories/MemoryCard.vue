<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useTilt } from "@/composables/useTilt";

const router = useRouter();

useTilt(".memory-card");

const props = defineProps({
  id: Number,
  title: String,
  subtitle: String,
  date: String,
  location: String,
  emoji: String,
  description: String,
  image: String,
  favorite: Boolean,
  theme: {
    type: Object,
    default: () => ({
      a: "#ff2d75",
      b: "#8338ec",
      c: "#3a86ff",
    }),
  },
});

const themeStyle = computed(() => ({
  "--theme-a": props.theme?.a || "#ff2d75",
  "--theme-b": props.theme?.b || "#8338ec",
  "--theme-c": props.theme?.c || "#3a86ff",
}));

function openMemory() {
  router.push(`/memories/${props.id}`);
}
</script>

<template>
  <article
    class="memory-card"
    :style="themeStyle"
    @click="openMemory"
  >

    <!-- IMAGE -->
    <div class="image-wrapper">

      <img
        :src="image"
        :alt="title"
        class="thumbnail"
        loading="lazy"
      />

      <div class="image-overlay"></div>

      <div class="emoji">
        {{ emoji }}
      </div>

      <span
        v-if="favorite"
        class="favorite"
      >
        ❤️
      </span>

    </div>


    <!-- CONTENT -->
    <div class="content">

      <div class="heading">

        <div>
          <h3>
            {{ title }}
          </h3>

          <small>
            {{ date }}
          </small>
        </div>

      </div>


      <p class="description">
        {{ description }}
      </p>


      <div class="footer">

        <span
          v-if="location"
          class="location"
        >
          📍 {{ location }}
        </span>

        <span class="view">
          View memory
          <span>→</span>
        </span>

      </div>

    </div>

  </article>
</template>


<style scoped>

/* ========================================
   CARD
======================================== */

.memory-card {
  position: relative;

  overflow: hidden;

  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      color-mix(
        in srgb,
        var(--theme-a) 8%,
        rgba(255, 255, 255, .055)
      ),
      rgba(255, 255, 255, .035)
    );

  border:
    1px solid
    rgba(255, 255, 255, .08);

  backdrop-filter:
    blur(24px);

  cursor: pointer;

  transform-style: preserve-3d;

  will-change:
    transform;

  transition:
    border-color .35s ease,
    box-shadow .35s ease,
    background .35s ease;

}


/* ========================================
   HOVER
======================================== */

.memory-card:hover {

  border-color:
    color-mix(
      in srgb,
      var(--theme-a) 65%,
      transparent
    );

  background:
    linear-gradient(
      145deg,
      color-mix(
        in srgb,
        var(--theme-a) 12%,
        rgba(255, 255, 255, .06)
      ),
      rgba(255, 255, 255, .04)
    );

  box-shadow:
    0 25px 70px
    color-mix(
      in srgb,
      var(--theme-a) 18%,
      transparent
    );
}


/* ========================================
   IMAGE
======================================== */

.image-wrapper {

  position: relative;

  height: 250px;

  overflow: hidden;

}


.thumbnail {

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  transition:
    transform .65s cubic-bezier(.2,.7,.2,1),
    filter .65s ease;

}


.memory-card:hover .thumbnail {

  transform:
    scale(1.06);

  filter:
    brightness(1.08);
}


/* ========================================
   IMAGE OVERLAY
======================================== */

.image-overlay {

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, .62),
      rgba(0, 0, 0, .05) 65%,
      transparent
    );

  pointer-events: none;

}


/* ========================================
   EMOJI
======================================== */

.emoji {

  position: absolute;

  left: 20px;
  bottom: 18px;

  width: 48px;
  height: 48px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background:
    rgba(0, 0, 0, .35);

  border:
    1px solid
    rgba(255, 255, 255, .14);

  backdrop-filter:
    blur(12px);

  font-size: 1.65rem;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, .2);

  transition:
    transform .35s ease;

}

.memory-card:hover .emoji {

  transform:
    translateY(-4px)
    scale(1.05);

}


/* ========================================
   FAVORITE
======================================== */

.favorite {

  position: absolute;

  top: 18px;
  right: 18px;

  width: 38px;
  height: 38px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    rgba(0, 0, 0, .35);

  border:
    1px solid
    rgba(255, 255, 255, .12);

  backdrop-filter:
    blur(12px);

  font-size: .9rem;

}


/* ========================================
   CONTENT
======================================== */

.content {

  padding: 22px;

}


/* ========================================
   TITLE
======================================== */

.heading {

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

}

h3 {

  margin: 0 0 6px;

  color: white;

  font-size: 1.25rem;

  line-height: 1.2;

  letter-spacing: -.02em;

}

.heading small {

  color: #9ca3af;

  font-size: .8rem;

}


/* ========================================
   DESCRIPTION
======================================== */

.description {

  margin: 16px 0 20px;

  color: #bdbdc5;

  font-size: .9rem;

  line-height: 1.7;

  display: -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;

}


/* ========================================
   FOOTER
======================================== */

.footer {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 12px;

  padding-top: 15px;

  border-top:
    1px solid
    rgba(255, 255, 255, .07);

}

.location {

  color: #9ca3af;

  font-size: .78rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

}

.view {

  flex-shrink: 0;

  color:
    var(--theme-a);

  font-size: .8rem;

  font-weight: 700;

  transition:
    transform .25s ease;

}

.view span {

  display: inline-block;

  margin-left: 4px;

  transition:
    transform .25s ease;

}

.memory-card:hover .view span {

  transform:
    translateX(4px);

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .memory-card {

    border-radius: 20px;

  }

  .image-wrapper {

    height: 210px;

  }

  .content {

    padding: 18px;

  }

  .emoji {

    left: 16px;
    bottom: 14px;

    width: 42px;
    height: 42px;

    border-radius: 13px;

    font-size: 1.4rem;

  }

  .favorite {

    top: 14px;
    right: 14px;

    width: 34px;
    height: 34px;

  }

  h3 {

    font-size: 1.1rem;

  }

  .description {

    margin: 13px 0 17px;

    font-size: .86rem;

    line-height: 1.65;

  }

  .footer {

    padding-top: 13px;

  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {

  .image-wrapper {

    height: 190px;

  }

  .content {

    padding: 16px;

  }

  .description {

    -webkit-line-clamp: 2;

  }

  .location {

    max-width: 45%;

  }

}

</style>