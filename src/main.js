import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     document.title = `${to.name} | Product and Cart`
//     next()
//   })

createApp(App).use(router).mount('#app')
