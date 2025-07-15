<template>
  <div class="container">
    <h2>GitHub 用户信息</h2>

    <div v-if="loading">🔄 加载中...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <img :src="user.avatar_url" alt="头像" width="100" />
      <p><strong>用户名：</strong>{{ user.login }}</p>
      <p><strong>简介：</strong>{{ user.bio || '暂无简介' }}</p>
      <p><strong>主页链接：</strong><a :href="user.html_url" target="_blank">{{ user.html_url }}</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 1. 定义响应式变量
const user = ref({})
const loading = ref(true)
const error = ref(null)

// 2. 使用 async/await 获取数据
async function fetchUser() {
  try {
    const response = await fetch('https://api.github.com/users/lxy123hh')
    if (!response.ok) throw new Error('请求失败')
    const data = await response.json()
    user.value = data
  } catch (err) {
    error.value = '❌ 加载失败，请稍后再试'
  } finally {
    loading.value = false
  }
}

// 3. 页面加载完成后自动调用
onMounted(() => {
  fetchUser()
})

</script>

<style scoped>

.container {
  font-family: sans-serif;
  padding: 20px;
}
img {
  border-radius: 8px;
  margin-bottom: 10px;
}
h2 {
  color: #333;
}
</style>