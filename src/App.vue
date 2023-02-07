<script setup>
import Home from "./pages/Home.vue";
</script>

<template>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>
<style>
.wrapper {
  background-image: url(./img/back.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
</style>
