<!-- UserList.vue -->
<template>

  <div>
    <h2>用户列表</h2>
    <ul>
      <li v-for="id in [101, 102]" :key="id">
        <button @click="goToUser(id)">查看用户 {{ id }}</button>
      </li>
    </ul>
  </div>
  
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToUser(id) {
  router.push({ name: 'user', params: { id } })
}

</script>