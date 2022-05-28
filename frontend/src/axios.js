import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

function signin(email, password) {
    return api.post('/signin', {email, password})
}

function getTransactions() {
    return api.get('/transactions')
}

function saveTransaction(transaction) {
    return api.post('/transactions', {transaction})
}

export default {
    signin,
    getTransactions,
    saveTransaction
}
