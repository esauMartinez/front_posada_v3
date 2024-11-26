import type { Employee } from '@/interfaces/employe'
import type { Raffle } from '@/interfaces/raffle'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRaffleStore = defineStore('rifa', () => {
  const employees = ref<Employee[]>([])
  const winners = ref<Employee[]>([])
  const counter = ref<number>(0)
  const raffle = ref<Raffle>({} as Raffle)

  return {
    employees,
    winners,
    counter,
    raffle,

    setEmployes(payload: Employee[]) {
      employees.value = payload
    },
    setWinner(payload: Employee) {
      winners.value.push(payload)
      counter.value++
    },
    setWinners(payload: Employee[]) {
      winners.value = payload
      counter.value = payload.length
    },
    setRaffle(payload: Raffle) {
      raffle.value = payload
    },
    searchWinner(payload: Employee[]) {
      winners.value = payload
    },
  }
})
