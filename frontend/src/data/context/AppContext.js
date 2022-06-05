import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

import api from '../../axios'


const AppContext = createContext({})

export function AppContextProvider(props) {

    const history = useNavigate()
    const {user, logout, setUser} = useAuth()
    const [listTransactions, setListTransactions] = useState([])
    const [balance, setBalance] = useState(0)

    async function saveRelease(data) {
        try {

            const newTransaction = {
                date: data.date,
                description: data.description,
                type: data.type,
                value: parseFloat(data.value).toFixed(2),
                status: true,
                user_id: user.id
            }

            const response = await api.saveTransaction(newTransaction)
            await getListTransactions()
            return response
        } catch (error) {
            throw error
        }
    }

    async function update(data) {
        try {

            const response = await api.update(data, data.id)
            await getListTransactions()
            return response
        } catch (error) {
            throw error
        }
    }

    async function getListTransactions() {
        try {
            if(!user) return
            const {data} = await api.getTransactions(user.id)
            setListTransactions(data)
        } catch (error) {
            throw error
        }
    }

    async function getBalance() {
        try {
            if(!user) return
            const {data} = await api.getBalance(user.id)
            setBalance(parseFloat(data.value).toFixed(2))
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getListTransactions()
        getBalance()
    }, [user])

    return (
        <AppContext.Provider value={{
            saveRelease,
            update,
            listTransactions,
            balance,
            getListTransactions
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext