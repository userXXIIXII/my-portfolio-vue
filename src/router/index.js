import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Contact from '../components/Contact.vue'
import Project from '../components/Project.vue'

import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/skill', name: 'Skill', component: Skill },
  { path: '/project', name: 'Project', component: Project },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, 
    meta: { layout: 'empty'} } 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
