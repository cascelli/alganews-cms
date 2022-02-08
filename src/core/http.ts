import axios from 'axios'

// Cria uma instancia do axios no projeto
const http = axios.create({
    baseURL: 'http://localhost:8080'
})

// exporta a instancia do axios para uso no projeto
export default http
