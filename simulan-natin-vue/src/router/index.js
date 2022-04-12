import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Representatives from '../views/Representatives'
import Profiles from '../views/Profiles'
import Conventions from '../views/Conventions'
import Convention from '../views/Convention'
import About from '../views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/representatives',
        name: 'Representatives',
        component: Representatives
    },
    {
        path: '/profiles',
        name: 'Profiles',
        component: Profiles
    },
    {
        path: '/conventions',
        name: 'Conventions',
        component: Conventions
    },
    {
        path: '/convention',
        name: 'Convention',
        component: Convention
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes,
} )

export default router