<template>
  <main>hello 李钟意</main>
  <div class="button-group">
    <el-button plain @click="toggleDark()">切换主题</el-button>
  </div>
</template>
<script setup lang="ts">
import {toggleDark} from '@/composables';
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
