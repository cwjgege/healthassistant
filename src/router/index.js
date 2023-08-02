import {createRouter, createWebHistory} from 'vue-router'
import index from '@/components/index'

const routes = [
    {path: "/", component: index},
    {path: "/terms", component: () => import('@/components/Terms')},
    {path: "/privacy", component: () => import('@/components/Privacy')}
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router