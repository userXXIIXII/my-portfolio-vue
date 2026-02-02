import { createApp } from 'vue'
import './style.css'
import './button.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

router.afterEach(() => {
  // seulement si la page est scrollable (mobile)
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0)
  }
})
