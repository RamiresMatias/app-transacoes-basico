import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

function signin(email, password) {
    return api.post('/signin', {email, password})
}

function getTransactions(userId) {
    return api.get(`/transactions/${userId}`)
}

function saveTransaction(transaction) {
    return api.post('/transactions', {transaction})
}

function register(user) {
    return api.post('/users', {user})
}

function getBalance(userId) {
    return api.get(`balance/${userId}`)
}

export default {
    signin,
    getTransactions,
    saveTransaction,
    register,
    getBalance
}
