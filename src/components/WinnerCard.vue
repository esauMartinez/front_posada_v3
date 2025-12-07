<script setup lang="ts">
import type { Employee } from '@/interfaces/employe'

interface Props {
  winner: Employee
}

defineProps<Props>()
</script>

<template>
  <div
    class="marco text-center flex flex-col items-center justify-center animate__animated animate__backInLeft"
  >
    <img src="../../public/frame.png" alt="frame" class="rounded-md frame-winner" />
    <div class="marco-contain">
      <img
        class="employee-image mb-4"
        :src="`https://www.tsmconnect.com/empleados_tsmconnect/${winner.idr}.jpg`"
        alt="employee"
      />
      <span class="text-white text-card text-[1.2rem] font-[400] w-[90%] mb-2">
        {{ winner.name }}
      </span>

      <span class="text-white text-card font-[100] mb-2">{{ winner.department }}</span>
      <span class="text-white text-card font-[400]">Regalo {{ winner.gift?.number_gift }}</span>
    </div>
  </div>
</template>

<style scoped>
.marco {
  height: 100%;
  width: 100%;
  position: relative;
}

.marco-contain {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.employee-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.text-card {
  font-family: 'Quicksand', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

@media screen and (max-width: 992px) {
  .marco {
    height: 100vh;
  }

  .frame-winner {
    height: 90%;
    width: 100%;
  }

  .employee-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
</style>
