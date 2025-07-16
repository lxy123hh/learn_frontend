<template>
  <>
    <h1>{{ test_message }}</h1>
    <button @click="click_button">点我</button>
    <el-button>sdf</el-button>
</template>

<script setup>
import getUserDate  from './components/getUserDate.vue';
import {ref} from 'vue';
const test_message = ref('lxy');
function click_button() {
  test_message.value = '你点我干嘛？';
}

</script>

<style>
h1 {
  color: blue;
}
button {
  background-color: yellow;
}
</style>