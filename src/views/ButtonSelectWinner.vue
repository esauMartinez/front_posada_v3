<script setup lang="ts">
import { useSocketState } from '@/stores/socket'
import { storeToRefs } from 'pinia'

const socketStore = useSocketState()
const { startButton, selectButton } = storeToRefs(socketStore)
</script>

<template>
  <div class="h-svh flex flex-col gap-3 items-center justify-center">
    <V-Button
      class="p-4 text-white h-[100px] w-[100px]"
      rounded
      @click="socketStore.iniciarScroll"
      :disabled="startButton"
      severity="success"
    >
      <i class="pi pi-play"></i>
    </V-Button>
    <V-Button
      class="p-4 text-white h-[100px] w-[100px]"
      rounded
      @click="socketStore.pararScroll"
      :disabled="selectButton"
      severity="danger"
    >
      <i class="pi pi-pause"></i>
    </V-Button>
  </div>
</template>

<style scoped></style>
