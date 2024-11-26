export interface Employee {
  idr?: string
  name: string
  winner?: boolean
  department?: string
  isDelivered?: boolean
  gift?: Gift
}

export interface Gift {
  number_gift: number
  description: string
  isSelected: boolean
}
