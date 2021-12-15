import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
    routes: []
})

// router.beforeEach((to, from, next) => {
//     document.title = `${to.name} | Product and Cart`
//     next()
//   })

createApp(App).use(router).mount('#app')
