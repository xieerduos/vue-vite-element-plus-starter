<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <el-config-provider namespace="ep">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
