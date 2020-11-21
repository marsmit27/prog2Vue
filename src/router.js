import { createWebHistory, createRouter } from 'vue-router'

import Contact from './components/UI/Contact.vue';
import TheResources from './components/learning-resources/TheResources.vue';
import Connexion from './components/UI/Connexion.vue';
import Inscription from './components/UI/Inscription.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: TheResources },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/connexion', name: 'connexion', component: Connexion },
    { path: '/inscription', name: 'inscription', component: Inscription },


  ]
})

export default router
