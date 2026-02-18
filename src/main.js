import { createApp } from 'vue'
import './style.css'
import './button.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') 
/* 
createApp(App) -> initialise l'application Vue 3 avec le composant racine App
.use(router) -> intègre le router Vue pour gérer la navigation SPA
.mount('#app') -> monte l'application sur l'élément <div id="app">
*/

router.afterEach(() => {
  // router.afterEach() -> petit hook pour l'UX mobile, après chaque navigation, le scroll remonte en haut
  // seulement si la page est scrollable (mobile, <= 768px)
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0)
  }
})
