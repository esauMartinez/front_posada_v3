import { disableEmployees } from '@/helpers/update-empleado'
import Swal from 'sweetalert2'
import { useEmployees } from './useEmployees'

export const useDisable = () => {
  const { getEmployeesFunction } = useEmployees()

  const disableEmployeesFunction = async () => {
    const data = await disableEmployees()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data.data,
      showConfirmButton: false,
      timer: 1500,
    })
    getEmployeesFunction()
  }

  const disable = () => {
    Swal.fire({
      title: 'Deshabilitar empleados',
      text: 'Deseas deshabilitar todos los empleados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await disableEmployeesFunction()
      }
    })
  }

  return {
    disable,
  }
}
