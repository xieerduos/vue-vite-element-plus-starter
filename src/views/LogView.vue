<template>
  <main class="log-container">
    <h1>log</h1>
    <p>{{ logId }}</p>
  </main>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {ref, onMounted} from 'vue';

const logId = ref<string>('');

onMounted(() => {
  const route = useRoute();

  logId.value = String(route.params.logId);

  console.log(route);
});
</script>

<style lang="scss" scoped>
.log-container {
  height: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
