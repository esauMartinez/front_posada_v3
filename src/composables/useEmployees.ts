import { getEmployees } from '@/helpers/get-employees'
import { useEmployeeStore } from '@/stores/employee'
import { storeToRefs } from 'pinia'

export const useEmployees = () => {
  const employeeStore = useEmployeeStore()
  const { employees } = storeToRefs(employeeStore)

  const getEmployeesFunction = async () => {
    await getEmployees()
      .then((data) => {
        employeeStore.setEmployees(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    employees,

    getEmployeesFunction,
  }
}
