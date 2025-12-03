<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'
import { confetti } from '@tsparticles/confetti'
import { watch } from 'vue'

const { winners, counter, congratulatios, congratulatiosFunction } = useRaffle()

const fireConfetti = async (x: number) => {
  await confetti('', {
    particleCount: 50,
    spread: 50,
    position: {
      x,
      y: 20,
    },
    shapes: ['square', 'circle', 'triangle'],
    scalar: 4,
    disableForReducedMotion: false,
  })
}

watch(counter, async (payload) => {
  if (payload) {
    document.getElementById('congratulations-card')?.classList.remove('animate__fadeOutDown')
    document.getElementById('congratulations-card')?.classList.add('animate__fadeInDown')
    await fireConfetti(50)
    congratulatiosFunction(true)
    setTimeout(() => {
      document.getElementById('congratulations-card')?.classList.add('animate__fadeOutDown')
      document.getElementById('congratulations-card')?.classList.remove('animate__fadeInDown')
      congratulatiosFunction(false)
    }, 5000)
  }
})
</script>

<template>
  <div
    id="congratulations-card"
    class="congratulations-card animate__animated"
    v-if="congratulatios"
  >
    <img
      class="employee-image"
      :src="`https://www.tsmconnect.com/empleados_tsmconnect/${winners[winners.length - 1].idr}.jpg`"
      alt="employee"
    />
    <h1 class="text-[7rem] text-white text-center">Felicidades al ganador</h1>
    <h1 class="text-[6rem] text-white text-center">
      {{ winners[winners.length - 1].name }}
    </h1>
    <h1 class="text-[5rem] text-white text-center">
      {{ winners[winners.length - 1].department }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.congratulations-card {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at bottom, #141a22 0%, #686868 100%) !important;
  overflow: hidden;
  filter: drop-shadow(0 0 3px white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  h1 {
    font-family: 'Great Vibes', cursive;
    font-weight: 400;
    font-style: normal;
    text-align: center;
  }
}

.employee-image {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 50%;
}

@media screen and (max-width: 992px) {
  #congratulations-card {
    h1 {
      font-size: 2rem !important;
    }
  }

  .employee-image {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
    border-radius: 50%;
  }
}
</style>
