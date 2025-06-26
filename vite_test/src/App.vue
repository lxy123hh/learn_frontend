<script setup>
import HelloWorld from './components/HelloWorld.vue'
const handleClick = () => {
  alert('你点我干嘛？');
}
</script>

<template>
  <div>
   <h1 class="title"> 欢迎使用vue+rem</h1>
   <button class="btn" @click="handleClick">点我一下啊</button>
  </div>
   <a href="https://www.baidu.com" target="_blank">点这里进入百度</a>
  <HelloWorld msg="Vite + Vue" />
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.title {
  font-size: 1rem;
  color: #42b883;
}

</style>
