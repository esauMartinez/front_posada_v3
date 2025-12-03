import { enableEmployees } from '@/helpers/update-empleado'
import Swal from 'sweetalert2'
import { useEmployees } from './useEmployees'

export const useEnable = () => {
  const { getEmployeesFunction } = useEmployees()

  const enableEmployeesFunction = async () => {
    const data = await enableEmployees()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data.data,
      showConfirmButton: false,
      timer: 1500,
    })
    getEmployeesFunction()
  }

  const enable = () => {
    Swal.fire({
      title: 'Habilitar empleados',
      text: 'Deseas habilitar todos los empleados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await enableEmployeesFunction()
      }
    })
  }

  return {
    enable,
  }
}
