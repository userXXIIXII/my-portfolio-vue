<template>
  <div class="app">
    <Header v-if="!isEmptyLayout" />      
    <main>
      <div class="page">
        <router-view />
      </div>   
    </main>
    <Footer v-if="!isEmptyLayout" />      
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Hook pour récupérer la route actuelle
const route = useRoute()

// Computed qui devient true si la route a meta.layout === 'empty'
const isEmptyLayout = computed(() => route.meta.layout === 'empty')
</script>

<style>
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

main {
  flex: 1;
  display: flex;
}

.page {
  flex: 1;
  width: 100%;
  display: flex;
}
</style>
