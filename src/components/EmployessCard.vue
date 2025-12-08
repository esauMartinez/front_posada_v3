<script setup lang="ts">
import type { Employee } from '@/interfaces/employe'

interface EmployeeProps {
  employee: Employee
}

defineProps<EmployeeProps>()
</script>

<template>
  <div class="employee-card p-3" :id="`_${employee.id}`">
    <img src="../../public/frame.png" alt="frame" class="rounded-md w-[95%]" />
    <div class="marco-contain">
      <img class="employee-image" :src="`santa.jpg`" alt="employee" />
      <span class="text-white text-[2rem] font-[300] p-4 text-center">{{ employee.name }}</span>
      <span class="text-white text-[1.5rem] font-[200] text-center">{{ employee.proyecto }}</span>
    </div>
  </div>
</template>

<style scoped>
.employee-card {
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
}

.marco-contain {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
}

.employee-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>
