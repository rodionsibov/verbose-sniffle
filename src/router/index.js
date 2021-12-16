import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import About from './../views/About.vue'
import Brazil from './../views/Brazil.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: Brazil
    },
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.name} | Vue Shcool Travel App`
    next()
  })

export default router