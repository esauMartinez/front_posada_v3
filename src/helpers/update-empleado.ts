import { raffleApiConnection } from '@/api'
import type { Employee } from '@/interfaces/employe'
import type { ResponseData } from '@/interfaces/response'

export const updateEmployee = async (payload: Employee): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.put<ResponseData>(`/employee`, payload)

  return data
}

export const updateEmployeeId = async (payload: number): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.get<ResponseData>(`/activate-employee/${payload}`)

  return data
}

export const enableEmployees = async (): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.put<ResponseData>(`/enable-employees`, {
    status: true,
  })

  return data
}

export const disableEmployees = async (): Promise<ResponseData> => {
  const { data } = await raffleApiConnection.put<ResponseData>(`/disable-employees`, {
    status: false,
  })

  return data
}
