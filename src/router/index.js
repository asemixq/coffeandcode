import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainPage.vue'
import Menu from '../views/Menu.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: { title: 'Главная' }
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
        meta: { title: 'Меню' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router