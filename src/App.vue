<script setup lang="ts">
import router from "./router";

if (localStorage.getItem("jwt")) {
  router.push("/app");
} else {
  router.push("/");
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
