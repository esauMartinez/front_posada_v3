<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'
import { watch } from 'vue'

const { raffle, getRaffleFunction } = useRaffle()

getRaffleFunction()

watch(raffle, (payload) => {
  if (payload.status === 'PLAYING') {
    document.getElementById('screen_raffle')?.classList.add('animate__fadeOutUp')
    document.getElementById('screen_raffle')?.classList.remove('animate__fadeInDown')
  } else if (
    payload.status === 'STOP' ||
    payload.status === 'PAUSED' ||
    payload.status === 'FINISHED'
  ) {
    document.getElementById('screen_raffle')?.classList.remove('animate__fadeOutUp')
    document.getElementById('screen_raffle')?.classList.add('animate__fadeInDown')
  }
})

// const toogleClass = () => {
//   document.getElementsByClassName('logo_tsm')[0].classList.add('animate__bounce')
//   setTimeout(() => {
//     document.getElementsByClassName('logo_tsm')[0].classList.remove('animate__bounce')
//   }, 3000)
// }

const closeScreenRaffle = () => {
  document.getElementById('screen_raffle')?.classList.add('animate__fadeOutUp')
  document.getElementById('screen_raffle')?.classList.remove('animate__fadeInDown')
  // showBtnClose.value = false
}

// setInterval(() => {
//   toogleClass()
// }, 10000)
</script>

<template>
  <div
    id="screen_raffle"
    class="min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden fixed top-0 left-0 right-0 bottom-0 z-50 animate__animated"
  >
    <div class="fixed top-0 right-0 z-[1010] p-2">
      <button class="rounded-full" @click="closeScreenRaffle">
        <i class="lni lni-xmark text-4xl text-black"></i>
      </button>
    </div>
    <!-- Logo Container -->
    <div class="flex items-center gap-3 mb-8">
      <!-- GT Text -->
      <div class="flex items-center">
        <span class="text-[200px] font-bold text-[#1e4a8a] leading-none tracking-tight">GT</span>
      </div>

      <!-- Wave Symbol -->
      <div class="flex flex-col gap-1">
        <div class="w-12 h-1 bg-[#1e4a8a] rounded-full transform origin-left scale-x-100"></div>
        <div class="w-10 h-1 bg-[#1e4a8a] rounded-full transform origin-left scale-x-90"></div>
        <div class="w-8 h-1 bg-[#1e4a8a] rounded-full transform origin-left scale-x-80"></div>
        <div class="w-6 h-1 bg-[#1e4a8a] rounded-full transform origin-left scale-x-70"></div>
      </div>
    </div>

    <!-- Tagline -->
    <p class="text-gray-600 text-3xl italic">Soluciones Para un Mundo Inalámbrico</p>

    <!-- Wave at Bottom -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg viewBox="0 0 1440 120" class="w-full h-auto">
        <path
          d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#1e4a8a"
          class="wave"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.wave {
  animation: wave 5s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    d: path('M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z');
  }
  50% {
    d: path('M0,32 C240,64 480,64 720,32 C960,0 1200,0 1440,32 L1440,120 L0,120 Z');
  }
}
</style>

<!-- <template>
  <div
    id="screen_raffle"
    class="h-svh fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center flex-col justify-center animate__animated"
  >
    <div class="fixed top-0 right-0 z-[1010] p-2">
      <button class="rounded-full" @click="closeScreenRaffle">
        <i class="lni lni-xmark text-4xl text-white"></i>
      </button>
    </div>

    <div class="flex justify-center">
      <img
        src="../../public/logo-gt.png"
        alt="logo_tsm"
        :class="['logo_tsm', 'animate__animated', 'animate__slow', 'w-full']"
        height="100px"
      />
    </div>

    <h1 class="text-[8rem] text-white text-center" v-if="raffle.status === 'FINISHED'">
      Rifa Finalizada
    </h1>
    <h1 class="text-[8rem] text-white text-center" v-if="raffle.status === 'FINISHED'">
      Felicidades a Todos los Ganadores !!
    </h1>

    <div class="fixed bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
#screen_raffle {
  background: #ffffff; /* fallback for old browsers */
  overflow: hidden;
  filter: drop-shadow(0 0 3px white);
}

#screen_raffle h1 {
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-style: normal;
}

.logo_tsm {
  width: 70%;
}

@media screen and (max-width: 992px) {
  .logo_tsm {
    width: 100%;
  }

  #screen_raffle {
    height: 100vh;
    z-index: 1003;
  }

  #screen_raffle h1 {
    font-family: 'Great Vibes', cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem !important;
  }
}
</style> -->
