<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'

const { disableButtonSelectAwinner, selectWinnerFunction } = useRaffle()
</script>

<template>
  <div class="h-svh flex items-center justify-center">
    <V-Button
      class="p-4 text-white h-[100px] w-[100px]"
      rounded
      @click="selectWinnerFunction"
      :disabled="disableButtonSelectAwinner"
      severity="success"
    >
      <i class="pi pi-play"></i>
    </V-Button>
  </div>
</template>

<style scoped></style>
