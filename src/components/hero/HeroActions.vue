<script setup>
import { useRouter } from "vue-router";
import AppButton from "@/components/ui/AppButton.vue";

const router = useRouter();

function enterHeart() {
  router.push("/boot");
}
</script>

<template>
  <div class="actions">
    <AppButton @click="enterHeart">
      Enter Heart →
    </AppButton>
  </div>
</template>

<style scoped>
.actions {
  margin-top: 18px;
}
</style>