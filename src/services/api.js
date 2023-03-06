import axios from 'axios'

export const link = process.env.API_URL

export function setupAPIClient() {

   const api = axios.create({
      baseURL: `http://localhost:8080/rest`,
      headers: {
         'Content-type': 'application/json',
      },
   })
   return api
}

export const api = setupAPIClient()