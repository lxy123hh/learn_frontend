<template>
    <header-comp></header-comp>
    <div class="body">
        <nav-comp></nav-comp>
        <body-comp></body-comp>
    </div>

</template>

<script setup>
import BodyComp from '@/components/layout/Body.vue'
import HeaderComp from '@/components/layout/Header.vue'
import NavComp from '@/components/layout/Nav.vue'
</script>

<style scoped>
.body {
    display: flex;
    width: 100%;
    height: calc(100% - 5rem);
}
</style>