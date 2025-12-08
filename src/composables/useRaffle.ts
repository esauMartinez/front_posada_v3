import { getWinners } from '@/helpers/get-winners'
import { resetWinners } from '@/helpers/reset-winners'
import { changeStatusRaffle } from '@/helpers/change-status-raffle'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'
import { getRaffle } from '@/helpers/get-raffle'
import { getEmployees } from '@/helpers/get-employees'
import { deliverGift } from '@/helpers/deliver-gift'
import { useRaffleStore } from '@/stores/raffle'
import type { Employee } from '@/interfaces/employe'
import { ref } from 'vue'
import { selectWinner } from '@/helpers/select-winner'

const useRaffle = () => {
  const raffleStore = useRaffleStore()

  const { employees, winners, counter, raffle, congratulatios } = storeToRefs(raffleStore)
  const winners_search = ref<Employee[]>([])
  const name = ref('')

  // employees list
  const getEmployessFunction = async (): Promise<void> => {
    const data = await getEmployees()
    const data_copy = data.reverse()
    data_copy.push({ name: 'TSM CONNECT', idr: 'connect_idr' })

    raffleStore.setEmployes(data.reverse())
  }

  // winners list
  const getWinnersFunction = async (): Promise<void> => {
    const data = await getWinners()
    raffleStore.setWinners(data)
  }

  // change status raffle
  const changeStatusRaffleFunction = async (): Promise<void> => {
    let texto = 'null'
    if (raffle.value.status === 'STOP') {
      texto = 'La rifa se iniciara'
    } else if (raffle.value.status === 'PLAYING') {
      texto = 'La rifa se pausara'
    } else if (raffle.value.status === 'PAUSED') {
      texto = 'La rifa se reanudara'
    }

    Swal.fire({
      title: 'Estas seguro/a?',
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = await changeStatusRaffle()
        raffleStore.setRaffle(data)
      }
    })
  }

  // get data raffle
  const getRaffleFunction = async (): Promise<void> => {
    const data = await getRaffle()
    raffleStore.setRaffle(data)
  }

  // reset raffle
  const resetWinnersFunction = async (): Promise<void> => {
    Swal.fire({
      title: 'Estas seguro/a?',
      text: 'La rifa se reiniciara',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await resetWinners()
        await getRaffleFunction()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  // deliver gift to employee
  const deliverGiftFunction = async (idr: string | undefined): Promise<void> => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Se marcara como entregado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await deliverGift(idr)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data,
          showConfirmButton: false,
          timer: 1500,
        })
        await getWinnersFunction()
        name.value = ''
      }
    })
  }

  const setWinnerSearch = (winners: Employee[]): void => {
    winners_search.value = winners
  }

  const congratulatiosFunction = (payload: boolean) => {
    raffleStore.setCongratulations(payload)
  }

  const selectWinnerFunction = () => {
    selectWinner()
  }

  return {
    employees,
    winners,
    counter,
    raffle,
    winners_search,
    name,
    congratulatios,
    getEmployessFunction,
    getWinnersFunction,
    changeStatusRaffleFunction,
    resetWinnersFunction,
    getRaffleFunction,
    deliverGiftFunction,
    setWinnerSearch,
    congratulatiosFunction,
    selectWinnerFunction,
  }
}

export default useRaffle
