import type { Employee } from '@/interfaces/employe'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>([])

  return {
    employees,

    setEmployees(payload: Employee[]) {
      employees.value = payload
    },
  }
})
