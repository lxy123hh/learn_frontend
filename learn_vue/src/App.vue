<template>
  <div>
    <h1>{{ test_message }}</h1>
    <button @click="click_button">点我</button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const test_message = ref('lxy');
function click_button() {
  test_message.value = '你点我干嘛？';
}

</script>