<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMusicStore } from "@/stores/music";

import cover from "@/assets/music/039441300_1773247291-NUCA_-_MASA_INI__NANTI__DAN_MASA_INDAH_LAINNYA.jpg";

const route = useRoute();
const music = useMusicStore();

const expanded = ref(false);

const hiddenRoutes = ["/", "/boot"];

const visible = computed(() => !hiddenRoutes.includes(route.path));

const current = computed(() => formatTime(music.currentTime));
const duration = computed(() => formatTime(music.duration));

function formatTime(time) {
  if (!time || Number.isNaN(time)) {
    return "00:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function seek(event) {
  music.seek(Number(event.target.value));
}

function volume(event) {
  music.setVolume(Number(event.target.value));
}

function toggleExpanded() {
  expanded.value = !expanded.value;
}
</script>

<template>
  <Transition name="player">
    <div
      v-if="visible"
      class="player"
      :class="{ expanded }"
    >

      <!-- MINI PLAYER -->
      <div
        v-if="!expanded"
        class="mini-player"
        @click="toggleExpanded"
      >
        <div class="mini-song">

          <div class="cover-wrapper">
            <img
              :src="cover"
              class="cover"
              :class="{ spinning: music.playing }"
              alt="Album Cover"
            />

            <div
              v-if="music.playing"
              class="equalizer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="song-info">
            <strong>MASA INI, NANTI...</strong>
            <small>NUCA</small>
          </div>
        </div>

        <button
          class="play mini-play"
          @click.stop="music.toggle()"
        >
          {{ music.playing ? "⏸" : "▶" }}
        </button>
      </div>


      <!-- EXPANDED PLAYER -->
      <div v-else class="expanded-player">

        <div class="expanded-header">

          <span class="now-playing">
            NOW PLAYING
          </span>

          <button
            class="close"
            @click="toggleExpanded"
          >
            ↓
          </button>

        </div>


        <div class="album-section">

          <div class="large-cover-wrapper">

            <img
              :src="cover"
              class="large-cover"
              :class="{ spinning: music.playing }"
              alt="Album Cover"
            />

            <div
              v-if="music.playing"
              class="large-equalizer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          <h3>
            MASA INI, NANTI...
          </h3>

          <p>
            NUCA
          </p>

        </div>


        <input
          class="progress"
          type="range"
          min="0"
          max="100"
          :value="music.progress"
          @input="seek"
        />

        <div class="time">
          <span>{{ current }}</span>
          <span>{{ duration }}</span>
        </div>


        <div class="controls">

          <button class="control">
            ↶
          </button>

          <button
            class="play main-play"
            @click="music.toggle()"
          >
            {{ music.playing ? "⏸" : "▶" }}
          </button>

          <button class="control">
            ↷
          </button>

        </div>


        <div class="volume-row">

          <span>🔊</span>

          <input
            class="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            :value="music.volume"
            @input="volume"
          />

        </div>

      </div>

    </div>
  </Transition>
</template>


<style scoped>

.player {
  position: fixed;

  right: 24px;
  bottom: 110px;

  width: 330px;

  border-radius: 24px;

  background: rgba(18, 18, 22, .78);

  backdrop-filter: blur(24px);

  border: 1px solid rgba(255, 255, 255, .08);

  box-shadow:
    0 25px 70px rgba(0, 0, 0, .35);

  overflow: hidden;

  z-index: 999;
}


/* =========================
   MINI PLAYER
========================= */

.mini-player {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 16px;

  padding: 14px 16px;

  cursor: pointer;

}

.mini-song {

  display: flex;

  align-items: center;

  gap: 12px;

  min-width: 0;

}

.song-info {

  display: flex;

  flex-direction: column;

  min-width: 0;

}

.song-info strong {

  font-size: .9rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;

}

.song-info small {

  color: #9ca3af;

  margin-top: 3px;

}


/* =========================
   COVER
========================= */

.cover-wrapper {

  position: relative;

  width: 48px;
  height: 48px;

  flex-shrink: 0;

}

.cover {

  width: 48px;
  height: 48px;

  border-radius: 13px;

  object-fit: cover;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, .3);

}


/* =========================
   PLAY
========================= */

.play {

  border: none;

  border-radius: 50%;

  cursor: pointer;

  background: #ff4d8d;

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  transition: .25s;

}

.play:hover {

  transform: scale(1.08);

}

.mini-play {

  width: 42px;
  height: 42px;

  flex-shrink: 0;

}


/* =========================
   EQUALIZER
========================= */

.equalizer {

  position: absolute;

  left: 50%;
  bottom: 4px;

  transform: translateX(-50%);

  display: flex;

  align-items: flex-end;

  gap: 2px;

  height: 16px;

  padding: 3px 5px;

  border-radius: 6px;

  background: rgba(0, 0, 0, .55);

  backdrop-filter: blur(8px);

}

.equalizer span {

  width: 3px;
  height: 7px;

  border-radius: 4px;

  background: white;

  animation:
    equalizer .8s ease-in-out infinite alternate;

}

.equalizer span:nth-child(1) {
  animation-delay: -.2s;
}

.equalizer span:nth-child(2) {
  animation-delay: -.5s;
}

.equalizer span:nth-child(3) {
  animation-delay: -.1s;
}

.equalizer span:nth-child(4) {
  animation-delay: -.35s;
}

@keyframes equalizer {

  from {
    height: 4px;
  }

  to {
    height: 13px;
  }

}


/* =========================
   SPIN
========================= */

.spinning {

  animation:
    spin 8s linear infinite;

}

@keyframes spin {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

}


/* =========================
   EXPANDED
========================= */

.expanded-player {

  padding: 20px;

}

.expanded-header {

  display: flex;

  align-items: center;

  justify-content: space-between;

}

.now-playing {

  font-size: .7rem;

  letter-spacing: .14em;

  color: #9ca3af;

}

.close {

  width: 32px;
  height: 32px;

  border: none;

  border-radius: 50%;

  background: rgba(255,255,255,.08);

  color: white;

  cursor: pointer;

  font-size: 1rem;

}


/* =========================
   ALBUM
========================= */

.album-section {

  text-align: center;

  padding: 22px 0;

}

.large-cover-wrapper {

  position: relative;

  width: 170px;
  height: 170px;

  margin: 0 auto 22px;

}

.large-cover {

  width: 170px;
  height: 170px;

  object-fit: cover;

  border-radius: 28px;

  box-shadow:
    0 25px 60px rgba(0,0,0,.4);

}

.album-section h3 {

  margin: 0;

  font-size: 1.05rem;

}

.album-section p {

  margin: 6px 0 0;

  color: #9ca3af;

}


/* =========================
   LARGE EQUALIZER
========================= */

.large-equalizer {

  position: absolute;

  left: 50%;
  bottom: 12px;

  transform: translateX(-50%);

  display: flex;

  align-items: flex-end;

  gap: 3px;

  padding: 5px 8px;

  border-radius: 8px;

  background: rgba(0,0,0,.55);

}

.large-equalizer span {

  width: 4px;
  height: 10px;

  background: white;

  border-radius: 5px;

  animation:
    equalizer-large .8s ease-in-out infinite alternate;

}

.large-equalizer span:nth-child(1) {
  animation-delay: -.2s;
}

.large-equalizer span:nth-child(2) {
  animation-delay: -.5s;
}

.large-equalizer span:nth-child(3) {
  animation-delay: -.1s;
}

.large-equalizer span:nth-child(4) {
  animation-delay: -.35s;
}

@keyframes equalizer-large {

  from {
    height: 5px;
  }

  to {
    height: 18px;
  }

}


/* =========================
   PROGRESS
========================= */

.progress {

  width: 100%;

}

.time {

  display: flex;

  justify-content: space-between;

  margin-top: 7px;

  color: #9ca3af;

  font-size: .75rem;

}


/* =========================
   CONTROLS
========================= */

.controls {

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 28px;

  margin: 18px 0;

}

.control {

  border: none;

  background: none;

  color: #d1d5db;

  font-size: 1.2rem;

  cursor: pointer;

}

.main-play {

  width: 54px;
  height: 54px;

  font-size: 1.1rem;

}


/* =========================
   VOLUME
========================= */

.volume-row {

  display: flex;

  align-items: center;

  gap: 10px;

}

.volume {

  flex: 1;

}


/* =========================
   TRANSITION
========================= */

.player-enter-active,
.player-leave-active {

  transition:
    opacity .3s ease,
    transform .3s ease;

}

.player-enter-from,
.player-leave-to {

  opacity: 0;

  transform:
    translateY(20px)
    scale(.96);

}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .player {
    left: 12px;
    right: 12px;
    bottom: 82px;

    width: auto;

    border-radius: 20px;
  }

  /* MINI */

  .mini-player {
    padding: 10px 12px;
  }

  .cover-wrapper,
  .cover {
    width: 44px;
    height: 44px;
  }

  .song-info strong {
    font-size: .82rem;
  }

  .song-info small {
    font-size: .7rem;
  }

  .mini-play {
    width: 38px;
    height: 38px;
  }


  /* EXPANDED */

  .expanded-player {
    padding: 16px;
  }

  .expanded-header {
    margin-bottom: 4px;
  }

  .album-section {
    padding: 10px 0 14px;
  }

  .large-cover-wrapper,
  .large-cover {
    width: 115px;
    height: 115px;
  }

  .large-cover {
    border-radius: 20px;
  }

  .album-section h3 {
    font-size: .95rem;
    margin-top: 12px;
  }

  .album-section p {
    font-size: .8rem;
    margin-top: 4px;
  }


  /* PROGRESS */

  .time {
    font-size: .7rem;
  }


  /* CONTROL */

  .controls {
    gap: 22px;
    margin: 12px 0;
  }

  .main-play {
    width: 46px;
    height: 46px;
  }

  .control {
    font-size: 1rem;
  }


  /* VOLUME */

  .volume-row {
    margin-top: 4px;
  }


  /* AGAR PLAYER TIDAK TERLALU TINGGI */

  .expanded-player {
    max-height: 72vh;
    overflow-y: auto;
  }

}
</style>