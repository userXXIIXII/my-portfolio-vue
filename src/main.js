import { createApp } from 'vue'
import './style.css'
import './button.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skill', component: Skill },
    { path: '/project', component: Project },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

router.afterEach(() => {
  // seulement si la page est scrollable (mobile)
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0)
  }
})
