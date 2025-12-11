import { io } from 'socket.io-client'
import { useRaffleStore } from './raffle'
import { defineStore } from 'pinia'
import type { Employee } from '@/interfaces/employe'
import type { Raffle } from '@/interfaces/raffle'
import { useEmployees } from '@/composables/useEmployees'
import Swal from 'sweetalert2'
import useRaffle from '@/composables/useRaffle'
import { nextTick, ref } from 'vue'

export const useSocketState = defineStore('socket', () => {
  const { congratulatiosFunction } = useRaffle()
  // const socket = io(`${urlsocket}/raffle`, { transports: ['websocket'] })

  const socket = io('https://recawi.com.mx/raffle', {
    path: `/${import.meta.env.VITE_WS_SOCKET}/socket.io/`,
  })

  const startButton = ref<boolean>(false)
  const selectButton = ref<boolean>(true)
  const winner = ref<Employee>({} as Employee)

  const raffleStore = useRaffleStore()
  const { getEmployeesFunction } = useEmployees()

  const connect = () => {
    socket.on('connect', () => {
      console.log('user connected')
    })
  }

  const scrollContent = ref<HTMLElement | null>(null)
  let animationFrame: number | null = null
  const SPEED = 200 // <<--- ajusta aquí

  const animate = () => {
    if (!scrollContent.value) return

    scrollContent.value.scrollTop += SPEED

    if (scrollContent.value.scrollTop >= scrollContent.value.scrollHeight / 2) {
      scrollContent.value.scrollTop = 0
    }

    // Importante: solo se llama a sí misma UNA VEZ
    animationFrame = requestAnimationFrame(animate)
  }
  const startCarousel = () => {
    stopCarousel()
    animationFrame = requestAnimationFrame(animate)
  }

  const stopCarousel = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
      animationFrame = null
    }
  }

  const goToEmployee = async (id: number) => {
    const el = document.getElementById(`_${id}`)
    if (!el || !scrollContent.value) return

    const container = scrollContent.value
    const target = el.offsetTop
    const start = container.scrollTop

    const distance = Math.abs(target - start)

    // >>> Duración igual a la velocidad del carrusel <<<
    const duration = (distance / (SPEED * 60)) * 200

    const startTime = performance.now()

    const smoothScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out (rápido al inicio, suave al final)
      const ease = 1 - Math.pow(1 - progress, 3)

      container.scrollTop = start + (target - start) * ease

      if (progress < 1) {
        requestAnimationFrame(smoothScroll)
      } else {
        raffleStore.setWinner(winner.value)
        congratulatiosFunction(true)
        socket.emit('reset buttons')
      }
    }

    requestAnimationFrame(smoothScroll)
  }

  socket.on('reset buttons', () => {
    startButton.value = false
    selectButton.value = true
  })

  socket.on('new winner', async (payload: Employee) => {
    console.log('a new winner selected')
    stopCarousel()
    goToEmployee(payload.id!)
    winner.value = payload
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

  socket.on('iniciar scroll', async () => {
    console.log('iniciar scroll')
    await nextTick()

    const container = document.getElementById('scroll-content')
    scrollContent.value = container as HTMLElement

    startCarousel()
    document.getElementById('screen_raffle')?.classList.add('animate__fadeOutUp')
    document.getElementById('screen_raffle')?.classList.remove('animate__fadeInDown')

    congratulatiosFunction(false)
  })

  const iniciarScroll = () => {
    startButton.value = true
    selectButton.value = false
    window.navigator?.vibrate?.(500)
    socket.emit('start scroll')
  }

  const pararScroll = () => {
    selectButton.value = true
    window.navigator?.vibrate?.(500)
    socket.emit('stop scroll')
  }

  socket.on('employee enabled', (data) => {
    Swal.fire({
      title: `Empleado ${data} confirmado`,
      icon: 'success',
      draggable: true,
    })
    getEmployeesFunction()
  })

  return {
    connect,
    startButton,
    selectButton,

    iniciarScroll,
    pararScroll,
  }
})
