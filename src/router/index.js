import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'

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
        component: () => import('./../views/About.vue')
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: () => import('./../views/Brazil.vue')
    },
    {
        path: '/hawaii',
        name: 'Hawaii',
        component: () => import('./../views/Hawaii.vue')
    },
    {
        path: '/jamaica',
        name: 'Jamaica',
        component: () => import('./../views/Jamaica.vue')
    },
    {
        path: '/panama',
        name: 'Panama',
        component: () => import('./../views/Panama.vue')
    },
    {
        path: '/destination/:id',
        name: 'Destination',
        component: () => import('./../views/DestinationShow.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes,
    // linkActiveClass: ''
})

router.beforeEach((to, from, next) => {
    document.title = `${to.name} | Vue Shcool Travel App`
    next()
  })

export default router