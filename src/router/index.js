import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import About from './../views/About.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     document.title = `${to.name} | Product and Cart`
//     next()
//   })

export default router