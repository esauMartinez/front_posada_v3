<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'
import { watch } from 'vue'

const {
  winners,
  name,
  getWinnersFunction,
  deliverGiftFunction,
  winners_search,
  searchEmployees,
  setWinnerSearch,
} = useRaffle()

getWinnersFunction()

watch(winners, (payload) => {
  if (payload) {
    setWinnerSearch(payload)
  }
})
</script>

<template>
  <div class="screen-delivery mt-3 mb-10">
    <div class="grid grid-cols-1 p-2">
      <input
        type="text"
        v-model="name"
        class="p-2 rounded-[4px] text-black border-0 outline-none"
        placeholder="Buscar empleado"
        @keyup="searchEmployees(name)"
      />
    </div>
    <div class="grid grid-cols-1 p-2">
      <table class="table-fixed border-collapse border border-slate-500">
        <thead>
          <tr>
            <th class="border border-slate-500 p-1">Empleado</th>
            <th class="border border-slate-500 p-0">Departamento</th>
            <th class="border border-slate-500 p-1">Regalo</th>
            <th class="border border-slate-500 p-1"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="winner in winners_search"
            :key="winner.idr"
            :class="[{ 'bg-green-300': winner.isDelivered, 'text-black': winner.isDelivered }]"
          >
            <td class="border border-slate-700 p-1">{{ winner.name }}</td>
            <td class="border border-slate-700 p-1 text-center">{{ winner.department }}</td>
            <td class="border border-slate-700 p-1 text-center">
              <span class="bg-blue-300 p-2 text-black rounded-sm">
                {{ winner.gift?.number_gift }}
              </span>
            </td>
            <td class="border border-slate-700 p-1">
              <button
                :class="[
                  { 'bg-yellow-500': !winner.isDelivered },
                  'text-black',
                  'p-3',
                  'rounded-sm',
                  { 'hover:bg-yellow-300': !winner.isDelivered },
                  'flex',
                  'items-center',
                  'justify-center',
                ]"
                @click="!winner.isDelivered && deliverGiftFunction(winner.idr)"
              >
                <i
                  :class="[
                    'lni',
                    {
                      'lni-truck-delivery-1': !winner.isDelivered,
                      'lni-check': winner.isDelivered,
                    },
                  ]"
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.screen-delivery {
  width: 100%;
}
</style>
