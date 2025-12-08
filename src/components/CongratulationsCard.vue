<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'
import { confetti } from '@tsparticles/confetti'
import { watch } from 'vue'

const { winners, congratulatios } = useRaffle()

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

watch(congratulatios, async (payload) => {
  if (payload) {
    await fireConfetti(50)
  }
})
</script>

<template>
  <div
    id="congratulations-card"
    :class="{
      'congratulations-card': true,
      animate__animated: true,
      animate__fadeInDown: congratulatios,
      animate__fadeOutDown: !congratulatios,
    }"
    v-if="winners.length > 0"
  >
    <!-- v-if="congratulatios" -->
    <img class="employee-image" :src="`santa.jpg`" alt="employee" />
    <h1 class="text-[6rem] text-white text-center">¡¡Felicidades al ganador!!</h1>
    <h2 class="text-[5rem] text-white text-center">
      {{ winners[winners.length - 1].name }}
    </h2>
    <h2 class="text-[4rem] text-white text-center">
      {{ winners[winners.length - 1].proyecto }}
    </h2>
    <h3 class="text-[3rem] text-white text-center">
      {{ winners[winners.length - 1].gift?.description }}
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.congratulations-card {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at bottom, #142722 100%, #cacaca 100%) !important;
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
    // font-style: normal;
    text-align: center;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
  }
  h2 {
    // font-family: 'Great Vibes', cursive;
    font-weight: 400;
    // font-style: normal;
    text-align: center;
    font-family: 'Urbanist', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
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
    h2 {
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
