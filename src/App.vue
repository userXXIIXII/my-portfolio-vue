<template>
  <div id="app">
    <Header />      
    <main>
      <div class="page">
        <router-view />
      </div>   
    </main>
    <Footer />      
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
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
