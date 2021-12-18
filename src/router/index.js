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
        path: '/destination/:id/:slug',
        name: 'Destination',
        component: () => import('./../views/DestinationShow.vue'),
        props: true,
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