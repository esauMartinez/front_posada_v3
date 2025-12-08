<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'

const { selectWinnerFunction } = useRaffle()
</script>

<template>
  <div class="h-svh flex items-center justify-center">
    <div class="flex flex-col gap-3">
      <button
        class="p-4 flex justify-center items-center bg-green-700 text-white rounded-[50%] h-[100px] w-[100px] hover:bg-green-600"
        @click="selectWinnerFunction"
      >
        <i class="pi pi-play"></i>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
