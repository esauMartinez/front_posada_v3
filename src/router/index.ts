import { createRouter, createWebHistory } from 'vue-router'
import RaffleMain from '../views/RaffleMain.vue'
import BoardButtons from '@/views/BoardButtons.vue'
import WinnersView from '@/views/WinnersView.vue'
import GiftDelivery from '@/views/GiftDelivery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RaffleMain,
    },
    {
      path: '/board-buttons',
      name: 'board',
      component: BoardButtons,
    },
    {
      path: '/winners',
      name: 'winners',
      component: WinnersView,
    },
    {
      path: '/gift-delivery',
      name: 'delivery',
      component: GiftDelivery,
    },
  ],
})

export default router
