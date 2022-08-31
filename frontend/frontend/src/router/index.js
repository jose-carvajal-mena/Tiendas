import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login.vue'

import Usuarios from '@/views/Usuarios/router'
import Menu from '@/components/Menu.vue'
import Presupuesto from '@/views/Presupuesto/router'
import Tiendas from '@/views/Tiendas/router'
import Productos from '@/views/Productos/router'
import Nuevo from '@/views/Nuevo.vue'

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: LoginView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  { path:'/registrar', name:'Nuevo', component:Nuevo }
  
]

const routes = baseRoutes
.concat(Usuarios)
.concat(Presupuesto)
.concat(Tiendas)
.concat(Productos)


console.log("Rutas: ",routes)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
