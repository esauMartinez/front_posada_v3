<script setup lang="ts">
import type { Employee } from '@/interfaces/employe'

interface EmployeeProps {
  employee: Employee
}

defineProps<EmployeeProps>()
</script>

<template>
  <V-Card
    :style="{ height: '100%' }"
    class="flex justify-center card-employee"
    :id="`_${employee.id}`"
  >
    <template #header>
      <div class="flex justify-center">
        <img
          alt="user header"
          :src="`santa.jpg`"
          class="w-[200px] rounded-full border-[#1e4a8a] border-2"
        />
      </div>
    </template>
    <template #title>
      <div class="flex justify-center">
        <span class="text-center" :style="{ 'font-size': '3rem' }">{{ employee.name }}</span>
      </div>
    </template>
    <template #subtitle>
      <div class="flex justify-center" :style="{ 'font-size': '2rem' }">
        {{ employee.proyecto }}
      </div>
    </template>
  </V-Card>
</template>

<style scoped></style>
