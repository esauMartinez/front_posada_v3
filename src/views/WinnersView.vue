<script setup lang="ts">
import ButtonEnd from '@/components/ButtonEnd.vue'
import CongratulationsCard from '@/components/CongratulationsCard.vue'
import WinnerCard from '@/components/WinnerCard.vue'
import useRaffle from '@/composables/useRaffle'
import { confetti } from '@tsparticles/confetti'
import { watch } from 'vue'

const { winners, counter, getWinnersFunction } = useRaffle()

getWinnersFunction()

watch(counter, async (payload) => {
  if (payload) {
    await confetti('')
  }
})

const down = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>

<template>
  <div class="h-svh winners">
    <CongratulationsCard />
    <div v-for="(winner, index) in winners" :key="index" class="p-2">
      <WinnerCard :winner="winner" />
    </div>
    <ButtonEnd @click="down" />
  </div>
</template>
