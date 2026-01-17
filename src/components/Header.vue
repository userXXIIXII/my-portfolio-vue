<template>
  <header class="header">
    <div class="logo-section">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <span class="title">MON PORTFOLIO</span>
    </div>
    <nav class="nav-links">
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/about" class="nav-link">À propos</router-link>
      <router-link to="/skill" class="nav-link">Compétences</router-link>
      <router-link to="/project" class="nav-link">Projets</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;                 /* full width */
  background-color: #404E3B;   /* couleur de fond sur toute la largeur */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;             /* padding intérieur pour espacement */
  height: 180px;
  box-sizing: border-box;       /* inclut le padding dans la largeur */
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-right: 10px;
  filter: drop-shadow(10px 10px 20px black);
}

.title {
  font-weight: bold;
  font-size: 2.7rem;
  color: #e6e6e6;
  text-shadow: 10px 10px 20px black;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  text-shadow: 10px 10px 20px black;
  color: #e6e6e6;
}

.nav-link:hover {
  color: #007BFF;
}

.nav-link.router-link-active {
  font-weight: bolder;
  text-decoration: underline;
}
</style>
