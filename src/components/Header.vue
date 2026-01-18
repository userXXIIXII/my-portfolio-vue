<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo-section">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
    </div>

    <!-- Burger menu -->
    <button class="burger" @click="toggleMenu">
      <span :class="{ 'open': isOpen }"></span>
      <span :class="{ 'open': isOpen }"></span>
      <span :class="{ 'open': isOpen }"></span>
    </button>

    <!-- Overlay -->
    <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

    <!-- Navigation -->
    <nav :class="['nav-links', { 'open': isOpen }]">
      <router-link to="/" class="nav-link" @click="closeMenu">Accueil</router-link>
      <router-link to="/about" class="nav-link" @click="closeMenu">À propos</router-link>
      <router-link to="/skill" class="nav-link" @click="closeMenu">Compétences</router-link>
      <router-link to="/project" class="nav-link" @click="closeMenu">Projets</router-link>
      <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
/* Header de base */
.header {
  width: 100%;
  background-color: #16161a;
  display: flex;
  justify-content: space-between; /* logo à gauche, nav à droite */
  align-items: center;
  padding: 0 50px;
  height: 180px;
  position: relative;
  box-sizing: border-box;
}

/* Logo */
.logo {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(10px 10px 10px black);
}

/* Nav links - desktop */
.nav-links {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
}

.nav-link {
  text-shadow: 10px 10px 10px black;
  color: #fffffe;
  transition: 0.3s ease;
}

.nav-link:hover {
  transform: scale(1.1);
}

.nav-link.router-link-active {
  font-weight: bolder;
  text-decoration: underline;
}

/* Burger menu */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002; /* au-dessus overlay */
}

.burger span {
  display: block;
  height: 4px;
  width: 100%;
  background-color: #fffffe;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1001;
  transition: opacity 0.3s ease;
}

/* Media queries pour mobile */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: fixed; /* menu mobile fixe */
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: #16161a;
    flex-direction: column;
    
    padding: 100px 20px; /* espace depuis le top */
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1003;
    gap: 25px;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-link {
    text-align: left;
    margin-bottom: 20px;
    font-size: 1.2rem;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease;
  }


  .nav-links.open .nav-link {
    opacity: 1;
    transform: translateX(0);
  }

  .header {
    padding: 0 20px; 
    height: 120px;
  }
}


@media (max-width: 480px) {
  .logo {
    width: 120px;
    height: 120px;
  }

  .nav-links {
    width: 200px;
    padding: 80px 15px;
    gap: 20px;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
