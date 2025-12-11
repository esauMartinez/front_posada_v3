<script setup lang="ts">
import type { Employee } from '@/interfaces/employe'

interface Props {
  winners: Employee[]
}

defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-3 gap-3 pt-3 pb-3 pr-3">
    <V-Card
      v-for="winner in winners"
      :key="winner.id"
      class="card-winner card-employee min-h-[1000px!]"
    >
      <template #header>
        <div class="flex justify-center">
          <img src="../../public/gift.png" class="w-[300px]" :alt="winner.gift?.description" />
        </div>
      </template>
      <template #title>
        <div class="flex justify-center">
          <span class="text-center">{{ winner.name }}</span>
        </div>
      </template>
      <template #subtitle>
        <div class="flex justify-center">
          <span class="text-center">{{ winner.proyecto }}</span>
        </div>
      </template>
      <template #content>
        <div class="flex justify-center">
          <span class="text-center">{{ winner.gift?.description }}</span>
        </div>
      </template>
    </V-Card>
  </div>
</template>

<style scoped>
.card-winner {
  height: 100px!;
}
</style>
