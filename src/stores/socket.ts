import { io } from 'socket.io-client'
import { useRaffleStore } from './raffle'
import { defineStore } from 'pinia'
import type { Employee } from '@/interfaces/employe'
import { urlsocket } from '@/api'
import type { Raffle } from '@/interfaces/raffle'
import { useEmployees } from '@/composables/useEmployees'

export const useSocketState = defineStore('socket', () => {
  console.log(urlsocket)
  const socket = io(`${urlsocket}/raffle`, { transports: ['websocket'] })

  const raffleStore = useRaffleStore()
  const { getEmployeesFunction } = useEmployees()

  const connect = () => {
    socket.on('connect', () => {
      console.log('user connected')
    })
  }

  socket.on('new winner', (winner: Employee) => {
    console.log('a new winner selected')
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

  socket.on('employee enabled', () => {
    getEmployeesFunction()
  })

  return {
    connect,
  }
})
