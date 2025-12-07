<script setup lang="ts">
import { useDisable } from '@/composables/useDisable'
import { useEmployees } from '@/composables/useEmployees'
import { useEnable } from '@/composables/useEnable'
import { useUpdate } from '@/composables/useUpdate'
import type { Employee } from '@/interfaces/employe'

import { FilterMatchMode } from '@primevue/core/api'
import { onMounted, ref } from 'vue'

const { employees, getEmployeesFunction } = useEmployees()
const { update } = useUpdate()
const { enable } = useEnable()
const { disable } = useDisable()

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  idr: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  department: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
})

onMounted(() => {
  getEmployeesFunction()
})
</script>

<template>
  <V-DataTable
    v-model:filters="filters"
    :value="employees"
    showGridlines
    paginator
    :rows="10"
    :rowsPerPageOptions="[10, 20, 50, 100]"
    :globalFilterFields="['name', 'idr', 'department']"
  >
    <template #header>
      <div class="grid grid-cols-3 gap-2">
        <V-IconField>
          <V-InputText fluid v-model="filters['global'].value" placeholder="Buscar" size="small" />
        </V-IconField>
        <V-Button
          size="small"
          severity="danger"
          icon="pi pi-check"
          label="Deshabilitar"
          @click="disable"
        />
        <V-Button
          size="small"
          severity="success"
          icon="pi pi-power-off"
          label="Habilitar"
          @click="enable"
        />
      </div>
    </template>
    <V-Column header="ID" field="id" sortable></V-Column>
    <V-Column header="Empleado" field="name" sortable></V-Column>
    <V-Column field="proyecto" header="Proyecto" :style="{ width: '200px' }" sortable />
    <V-Column field="localidad" header="Localidad" :style="{ width: '200px' }" sortable />
    <V-Column field="isAvailable" header="Estatus" :style="{ width: '200px' }" sortable>
      <template #body="{ data }: { data: Employee }">
        <V-Tag
          :value="data.isAvailable ? 'Habilitado' : 'No habilitado'"
          :severity="data.isAvailable ? 'success' : 'danger'"
          class="w-full"
        />
      </template>
    </V-Column>
    <V-Column header="Qr" :style="{ width: '50px' }">
      <template #body="{ data }: { data: Employee }">
        <div class="flex justify-center items-center">
          <iframe :src="data.qrCode" frameborder="0"></iframe>
        </div>
      </template>
    </V-Column>
    <V-Column header="Acciones" :style="{ width: '200px' }">
      <template #body="{ data }: { data: Employee }">
        <div class="flex justify-center">
          <V-Button
            :icon="data.isAvailable ? 'pi pi-times' : 'pi pi-check'"
            :severity="data.isAvailable ? 'danger' : 'success'"
            @click="update(data)"
          />
        </div>
      </template>
    </V-Column>

    <template #footer> Ganadores: {{ employees.length }} </template>
  </V-DataTable>
</template>

<style scoped></style>
