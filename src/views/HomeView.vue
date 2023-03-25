<template>
  <main class="home-container">
    <h1>home</h1>

    <button @click="onClickLog">跳转到log页面</button>

    <el-row class="mb-4">
      <el-button type="primary">Primary</el-button>
    </el-row>

    <ul class="todos-wrap">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span>{{ todo.userId }}</span
        >, <span>{{ todo.id }}</span
        >, <span>{{ todo.title }}</span
        >,
        <span>{{ todo.completed }}</span>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import {getTodos, type TodoItem} from '@/apis/todos';
import {useRouter} from 'vue-router';
import {ref, onMounted} from 'vue';

const router = useRouter();
function onClickLog() {
  router.push({path: `/log/${Math.random().toString().slice(2)}`});
}

const todos = ref<TodoItem[]>([]);

onMounted(() => {
  getTodos().then((response: {data: TodoItem[]}) => {
    console.log('data', response.data);
    todos.value = response.data;
  });
});
</script>

<style lang="scss" scoped>
.home-container {
  // height: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
