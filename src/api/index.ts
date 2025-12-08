import axios from 'axios'

// export const url = 'https://api-posada-v3-c2908b9e58f3.herokuapp.com'
export const url = 'https://recawi.com.mx'
export const urlsocket = 'wss://recawi.com.mx'

export const raffleApiConnection = axios.create({ baseURL: `${url}/api-posada` })
