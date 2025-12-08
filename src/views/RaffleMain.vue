<script setup lang="ts">
import CongratulationsCard from '@/components/CongratulationsCard.vue'
import EmployessCard from '@/components/EmployessCard.vue'
import ScreenRaffle from '@/components/ScreenRaffle.vue'
import WinnerCard from '@/components/WinnerCard.vue'
import { useEmployees } from '@/composables/useEmployees'
import useRaffle from '@/composables/useRaffle'
import { watch } from 'vue'

const { raffle, winners, counter, getEmployessFunction, getWinnersFunction } = useRaffle()

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
    // await fireConfetti()
  }
})

watch(raffle, (payload) => {
  if (payload.status === 'PLAYING') {
    document.getElementById('scroll-content')?.classList.add('scroll-content')
  } else if (
    payload.status === 'STOP' ||
    payload.status === 'PAUSED' ||
    payload.status === 'FINISHED'
  ) {
    console.log('parar la ruleta')
    document.getElementById('scroll-content')?.classList.remove('scroll-content')
  }
})

const scrollContainer = document.querySelector('.scroll-content')
const items = Array.from(document.querySelectorAll('.item'))

items.forEach((item) => {
  const clone = item.cloneNode(true)
  scrollContainer?.appendChild(clone)
})
</script>

<template>
  <div class="raffle-main">
    <div class="snow" v-for="index of 189" :key="index"></div>
    <CongratulationsCard />
    <ScreenRaffle />
    <div class="grid grid-cols-12">
      <div class="card col-span-5 h-svh overflow-hidden">
        <div id="scroll-content">
          <div v-for="(employee, index) in employees" :key="index" class="item">
            <EmployessCard :employee="employee" />
          </div>
        </div>
      </div>
      <div
        class="col-span-7 h-svh grid grid-cols-3 items-start content-start overflow-hidden winners"
      >
        <div v-for="(winner, index) in winners" :key="index" class="p-2">
          <WinnerCard :winner="winner" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @use 'sass:math';

.scroll-content {
  animation: scroll 50s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.raffle-main {
  background: radial-gradient(ellipse at bottom, #ffffff 100%, #ffffff 100%);
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
//   background: white;
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
