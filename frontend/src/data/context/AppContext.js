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
            
            const valueResult = parseFloat(data.value).toFixed(2)

            const value = data.type === 'D' ? -valueResult : +valueResult

            const newTransaction = {
                date: data.date,
                description: data.description,
                type: data.type,
                value,
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

    async function getListTransactions() {
        try {
            const {data} = await api.getTransactions()
            setListTransactions(data)
        } catch (error) {
            throw error
        }
    }

    async function getBalance() {
        try {
            const {data} = await api.getBalance(user.id)
            setBalance(parseFloat(data.value).toFixed(2))
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getListTransactions()
        getBalance()
    }, [null])

    return (
        <AppContext.Provider value={{
            saveRelease,
            listTransactions,
            balance
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext