import { io } from 'socket.io-client'
import { useRaffleStore } from './raffle'
import { defineStore } from 'pinia'
import type { Employee } from '@/interfaces/employe'
import { urlsocket } from '@/api'
import type { Raffle } from '@/interfaces/raffle'
import { useEmployees } from '@/composables/useEmployees'
import Swal from 'sweetalert2'
import useRaffle from '@/composables/useRaffle'

export const useSocketState = defineStore('socket', () => {
  const { disableButtonSelectAwinner, congratulatiosFunction } = useRaffle()
  const socket = io(`${urlsocket}/raffle`, { transports: ['websocket'] })

  const raffleStore = useRaffleStore()
  const { getEmployeesFunction } = useEmployees()

  const connect = () => {
    socket.on('connect', () => {
      console.log('user connected')
    })
  }

  socket.on('new winner', async (winner: Employee) => {
    console.log('a new winner selected')
    document.getElementById('scroll-content')?.classList.remove('scroll-content')
    disableButtonSelectAwinner.value = false
    congratulatiosFunction(true)
    raffleStore.setWinner(winner)
  })

  socket.on('reseted', (payload: Raffle) => {
    console.log('raffle reseted')
    raffleStore.setWinners([])
    raffleStore.setRaffle(payload)
  })

  socket.on('status raffle', (payload: Raffle) => {
    console.log(`status raffle`, payload)
    raffleStore.setRaffle(payload)
  })

  socket.on('raffleFinished', (payload: Raffle) => {
    console.log('raffle finished')
    raffleStore.setRaffle(payload)
  })

  socket.on('iniciar scroll', () => {
    console.log('iniciar scroll')
    document.getElementById('scroll-content')?.classList.add('scroll-content')
    document.getElementById('screen_raffle')?.classList.add('animate__fadeOutUp')
    document.getElementById('screen_raffle')?.classList.remove('animate__fadeInDown')
    disableButtonSelectAwinner.value = true
    congratulatiosFunction(false)
  })

  socket.on('employee enabled', () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Empleado confirmado',
      showConfirmButton: false,
      timer: 1500,
    })
    getEmployeesFunction()
  })

  return {
    connect,
  }
})
