<template>
  <div>
    <nav>
      <button @click="goHome">首页</button>
      <button @click="goAbout">关于</button>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => router.push('/')
const goAbout = () => router.push('/about')
</script>