import { updateEmployee, updateEmployeeId } from '@/helpers/update-empleado'
import type { Employee } from '@/interfaces/employe'
import Swal from 'sweetalert2'
import { useEmployees } from './useEmployees'
import { ref } from 'vue'

export const useUpdate = () => {
  const result = ref('')
  const { getEmployeesFunction } = useEmployees()

  const updateEmployeeFunction = async (payload: Employee) => {
    const data = await updateEmployee(payload)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data.data,
      showConfirmButton: false,
      timer: 1500,
    })
    getEmployeesFunction()
  }

  const updateEmployeeFunctionId = async (payload: number) => {
    const data = await updateEmployeeId(payload)
    alert(data)
    result.value = ''
  }

  const update = (payload: Employee) => {
    let title = ''
    let text = ''
    if (payload.isAvailable) {
      title = 'Deshabilitar'
      text = 'Quieres deshabilitar este empleado?'
    } else {
      title = 'Habilitar'
      text = 'Quieres habilitar este empleado?'
    }

    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        payload.isAvailable = !payload.isAvailable
        await updateEmployeeFunction(payload)
      }
    })
  }

  return {
    result,
    update,
    updateEmployeeFunctionId,
  }
}
