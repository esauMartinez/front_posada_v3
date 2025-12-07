export interface Employee {
  id?: number
  idr?: string
  name: string
  winner?: boolean
  department?: string
  isAvailable?: boolean
  isDelivered?: boolean
  gift?: Gift
  qrCode?: string
}

export interface Gift {
  number_gift: number
  description: string
  isSelected: boolean
}
