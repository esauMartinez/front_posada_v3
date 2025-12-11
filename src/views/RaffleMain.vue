<script setup lang="ts">
import CongratulationsCard from '@/components/CongratulationsCard.vue'
import EmployessCard from '@/components/EmployessCard.vue'
import ScreenRaffle from '@/components/ScreenRaffle.vue'
import WinnerCard from '@/components/WinnerCard.vue'
import { useEmployees } from '@/composables/useEmployees'
import useRaffle from '@/composables/useRaffle'
import { watch } from 'vue'

const { winners, counter, getEmployessFunction, getWinnersFunction } = useRaffle()

const { employees, getEmployeesFunction } = useEmployees()

getEmployeesFunction()

getEmployessFunction()

getWinnersFunction()

watch(counter, async (payload) => {
  if (payload) {
    setTimeout(async () => {
      const winnersElement = document.getElementsByClassName('winners')[0]
      winnersElement.scrollTop = winnersElement.scrollHeight
    }, 100)
  }
})
</script>

<template>
  <div class="raffle-main">
    <div class="snow" v-for="index of 189" :key="index"></div>
    <CongratulationsCard />
    <ScreenRaffle />
    <div class="grid grid-cols-12">
      <div class="card col-span-5 h-svh overflow-hidden">
        <div id="scroll-content" class="overflow-y-hidden h-full">
          <div
            v-for="(employee, index) in employees"
            :key="index"
            :id="`_${employee.id}`"
            class="h-[100vh] p-3 item"
          >
            <EmployessCard :employee="employee" />
          </div>
        </div>
      </div>
      <div class="col-span-7 h-[100vh] overflow-hidden winners">
        <WinnerCard :winners="winners" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @use 'sass:math';

.raffle-main {
  background-color: #1e4a8a;
  overflow: hidden;
  filter: drop-shadow(0 0 3px white);
}

// @function random_range($min, $max) {
//   $rand: math.random();
//   $random_range: $min + math.floor($rand * (($max - $min) + 1));
//   @return $random_range;
// }

// .snow {
//   $total: 200;
//   position: absolute;
//   width: 13px;
//   height: 13px;
//   background: rgb(230, 230, 230);
//   border-radius: 50%;
//   z-index: 1001;

//   @for $i from 1 through $total {
//     $random-x: math.random(1000000) * 0.0001vw;
//     $random-offset: random_range(-100000, 100000) * 0.0001vw;
//     $random-x-end: $random-x + $random-offset;
//     $random-x-end-yoyo: $random-x + calc($random-offset / 2);
//     $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
//     $random-yoyo-y: $random-yoyo-time * 100vh;
//     $random-scale: math.random(10000) * 0.0001;
//     $fall-duration: random_range(10, 30) * 1s;
//     $fall-delay: math.random(30) * -1s;

//     &:nth-child(#{$i}) {
//       opacity: math.random(10000) * 0.0001;
//       transform: translate($random-x, -10px) scale($random-scale);
//       animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
//     }

//     @keyframes fall-#{$i} {
//       #{math.percentage($random-yoyo-time)} {
//         transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
//       }

//       to {
//         transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
//       }
//     }
//   }
// }
</style>
