import axios from 'axios'

//Base-URL => https://sujeitoprogramador.com/
// r-api/?api=filmes (TODOS OS FILMES)
// r-api/?api=filmes/id (Filme do ID especifico)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;
