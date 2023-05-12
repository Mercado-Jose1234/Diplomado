import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import InicioPrincipal from '../paginas/InicioPrincipal.vue'
import reservacionCita from '../paginas/reservaciones.vue'
import registro from '../paginas/registrar.vue'
import nosotros from '../paginas/nosotros.vue'
import login from '../paginas/login.vue'
import misCitas from '../CitasUsuario/misCitas.vue'
import reporteCitas from '../Administrador/ReporteCitas/Reporte_citas.vue'
import listServicios from '../Administrador/Servicios/servicios.vue'
import editarservicios from '../Administrador/Servicios/editarServicios.vue'
import crearservicios from '../Administrador/Servicios/crearservicios.vue'
import dashboard from '../Administrador/dashboard.vue'
import dashboardBarbero from '../Barberos/dashboardBarbero.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioPrincipal
    },
   

    {
      path: '/reservaciones',
      name: 'reservaciones',
      component: reservacionCita
    },
    
    {
      path: '/registro',
      name: 'registro',
      component: registro
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: nosotros
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/misCitas',
      name: 'misCitas',
      component: misCitas
    },
    {
      path: '/reportecitas',
      name: 'reportecitas',
      component: reporteCitas
    },
    {
      path: '/listServicios',
      name: 'listServicios',
      component: listServicios
    },
    {
      path: '/editarservicios/:id',
      name: 'editarservicios',
      component: editarservicios
    },
    {
      path: '/crearservicios',
      name: 'crearservicios',
      component: crearservicios
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/dashboardBarbero',
      name: 'dashboardBarbero',
      component: dashboardBarbero
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
