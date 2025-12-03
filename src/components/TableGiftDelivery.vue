<script setup lang="ts">
import useRaffle from '@/composables/useRaffle'
import { FilterMatchMode } from '@primevue/core/api'
import { ref, watch } from 'vue'

const { winners, getWinnersFunction, deliverGiftFunction, winners_search, setWinnerSearch } =
  useRaffle()

getWinnersFunction()

watch(winners, (payload) => {
  if (payload) {
    setWinnerSearch(payload)
  }
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
})
</script>

<template>
  <V-DataTable
    v-model:filters="filters"
    :value="winners_search"
    showGridlines
    paginator
    :rows="10"
    :rowsPerPageOptions="[10, 20, 50]"
    :globalFilterFields="['name']"
  >
    <template #header>
      <V-IconField>
        <V-InputIcon>
          <i class="pi pi-search" />
        </V-InputIcon>
        <V-InputText fluid v-model="filters['global'].value" placeholder="Buscar" />
      </V-IconField>
    </template>
    <V-Column header="Empleado" field="name"></V-Column>
    <V-Column header="Numero de regalo" :style="{ width: '200px' }">
      <template #body="{ data }">
        <V-Tag :value="data.gift_id" severity="info" class="w-full" />
      </template>
    </V-Column>
    <V-Column header="Regalo entregado" :style="{ width: '200px' }">
      <template #body="{ data }">
        <V-Tag value="Regalo entregado" v-if="data.isDelivered" severity="success" />
        <V-Tag value="Regalo sin entregar" v-else severity="danger" />
      </template>
    </V-Column>
    <V-Column>
      <template #body="{ data }">
        <div class="flex justify-center">
          <V-Button
            icon="pi pi-gift"
            @click="!data.isDelivered && deliverGiftFunction(data.idr)"
            v-if="!data.isDelivered"
          />
        </div>
      </template>
    </V-Column>

    <template #footer> Ganadores: {{ winners_search.length }} </template>
  </V-DataTable>
</template>

<style scoped></style>
