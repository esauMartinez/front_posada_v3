import axios from 'axios'

export const url = 'https://api-posada-v3-c2908b9e58f3.herokuapp.com'
// export const url = 'http://192.168.4.5:3000'

export const raffleApiConnection = axios.create({ baseURL: url })
