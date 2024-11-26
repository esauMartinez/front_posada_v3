<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'

const { raffle, changeStatusRaffleFunction, resetWinnersFunction, getRaffleFunction } = useRaffle()

getRaffleFunction()
</script>

<template>
  <div class="h-svh flex items-center justify-center">
    <div class="flex flex-col gap-3">
      <button
        class="p-4 flex justify-center items-center bg-green-700 text-white rounded-[50%] h-[100px] w-[100px] hover:bg-green-600"
        @click="changeStatusRaffleFunction"
        v-if="raffle.status !== 'FINISHED'"
      >
        <i
          class="lni lni-play text-4xl"
          v-if="raffle.status === 'PAUSED' || raffle.status === 'STOP'"
        ></i>
        <i class="lni lni-pause text-4xl" v-if="raffle.status === 'PLAYING'"></i>
      </button>
      <button
        class="p-4 flex justify-center items-center bg-red-500 text-white rounded-[50%] h-[100px] w-[100px] hover:bg-red-400"
        @click="resetWinnersFunction"
      >
        <i class="lni lni-refresh-circle-1-clockwise text-4xl"></i>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
