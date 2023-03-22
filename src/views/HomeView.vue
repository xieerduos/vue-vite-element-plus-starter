<template>
  <main class="home-container">
    <h1>home</h1>

    <button @click="onClickLog">跳转到log页面</button>
  </main>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
function onClickLog() {
  router.push({path: `/log/${Math.random().toString().slice(2)}`});
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
