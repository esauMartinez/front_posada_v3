import { createRouter, createWebHistory } from 'vue-router'
import RaffleMain from '../views/RaffleMain.vue'
import BoardButtons from '@/views/BoardButtons.vue'
import WinnersView from '@/views/WinnersView.vue'
import GiftDelivery from '@/views/GiftDelivery.vue'
import EmployeesPage from '@/views/EmployeesPage.vue'
import ActivatePage from '@/views/ActivatePage.vue'
import ButtonSelectWinner from '@/views/ButtonSelectWinner.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RaffleMain,
    },
    {
      path: '/resetear',
      name: 'board',
      component: BoardButtons,
    },
    {
      path: '/ganadores',
      name: 'winners',
      component: WinnersView,
    },
    {
      path: '/seleccionar-ganador',
      name: 'winners',
      component: ButtonSelectWinner,
    },
    {
      path: '/lista-ganadores',
      name: 'delivery',
      component: GiftDelivery,
    },
    {
      path: '/lista-empleados',
      name: 'employees',
      component: EmployeesPage,
    },
    {
      path: '/activar-empleado',
      name: 'activar',
      component: ActivatePage,
    },
  ],
})

export default router
