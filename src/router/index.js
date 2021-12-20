import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/Home.vue'
import sourceData from "./../data.json";

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
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter(to, from) {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if (!exists) {
                return {
                    name: 'NotFound',
                    params: { pathMatch: to.path.split('/').slice(1) },
                    query: to.query,
                    hash: to.hash
                }
            }
        },
        children: [
            {
                path: '/destination/:id/:slug/:experienceSlug',
                name: 'ExperienceShow',
                component: () => import('./../views/ExperienceShow.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) }),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./../views/NotFound.vue')
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