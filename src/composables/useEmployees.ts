import { getEmployees, sendQrEmployee } from '@/helpers/get-employees'
import { useEmployeeStore } from '@/stores/employee'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'

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

  const sendEmailQrEmployee = async (id: number) => {
    Swal.fire({
      title: 'Correo con QR',
      text: 'Se le enviara un correo con el Qr al empleado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await sendQrEmployee(id)
          .then((data) => {
            Swal.fire({
              icon: 'success',
              title: data.data,
            })
            getEmployeesFunction()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return {
    employees,

    getEmployeesFunction,

    sendEmailQrEmployee,
  }
}
