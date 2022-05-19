import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";

const AppContext = createContext({})

export function AppContextProvider(props) {

    const {user, sair, setUser, alteraSaldoUsuario} = useAuth()
    const [lancamentos, setLancamentos] = useState([])
    const [saldo, setSaldo] = useState(0)

    function gravarLancamento(dados) {

        const valor = dados.tipo === 'D' ? parseFloat(-dados.valor) : parseFloat(+dados.valor)
        const novoLancamento = {
            data: dados.data,
            descricao: dados.descricao,
            tipo: dados.tipo,
            valor,
            user: user.email
        }
        const arrTemp = lancamentos
        arrTemp.push(novoLancamento) 
        setLancamentos(arrTemp)

        const novoSaldo = saldo + valor
        setSaldo(novoSaldo)
        setUser({...user, saldo: novoSaldo})
        alteraSaldoUsuario(novoSaldo)
    }

    useEffect(() => {
        if(!user) {
            sair()
            return
        }
        setSaldo(user.saldo)
    }, [user])

    return (
        <AppContext.Provider value={{
            gravarLancamento,
            lancamentos,
            saldo
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext