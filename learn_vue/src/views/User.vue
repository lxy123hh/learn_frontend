<!-- User.vue -->
<template>

  <h2>用户 ID：{{ id }}</h2>

</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

</script>