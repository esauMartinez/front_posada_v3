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

const toogleClass = () => {
  document.getElementsByClassName('logo_tsm')[0].classList.add('animate__bounce')
  setTimeout(() => {
    document.getElementsByClassName('logo_tsm')[0].classList.remove('animate__bounce')
  }, 3000)
}

const closeScreenRaffle = () => {
  document.getElementById('screen_raffle')?.classList.add('animate__fadeOutUp')
  document.getElementById('screen_raffle')?.classList.remove('animate__fadeInDown')
  // showBtnClose.value = false
}

setInterval(() => {
  toogleClass()
}, 10000)
</script>

<template>
  <div
    id="screen_raffle"
    class="h-svh fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center flex-col justify-center animate__animated"
  >
    <div class="fixed top-0 right-0 z-[1010] p-2">
      <button class="rounded-full" @click="closeScreenRaffle">
        <i class="lni lni-xmark text-4xl text-white"></i>
      </button>
    </div>

    <img
      src="../../public/1.5.png"
      alt="logo_tsm"
      :class="['logo_tsm', 'animate__animated', 'animate__slow']"
    />

    <h1 class="text-[8rem] text-white text-center" v-if="raffle.status === 'FINISHED'">
      Rifa Finalizada
    </h1>
    <h1 class="text-[8rem] text-white text-center" v-if="raffle.status === 'FINISHED'">
      Felicidades a Todos los Ganadores !!
    </h1>
  </div>
</template>

<style scoped>
#screen_raffle {
  background: radial-gradient(ellipse at bottom, #141a22 0%, #686868 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 3px white);
}

#screen_raffle h1 {
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  font-style: normal;
}

.logo_tsm {
  width: 80%;
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
</style>
