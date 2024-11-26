import { io } from 'socket.io-client'
import { useRaffleStore } from './raffle'
import { defineStore } from 'pinia'
import type { Employee } from '@/interfaces/employe'
import { url } from '@/api'
import type { Raffle } from '@/interfaces/raffle'

export const useSocketState = defineStore('socket', () => {
  const socket = io(`${url}/raffle`)
  const raffleStore = useRaffleStore()

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

  return {
    connect,
  }
})
