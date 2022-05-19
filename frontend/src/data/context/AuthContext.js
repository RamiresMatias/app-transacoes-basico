import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export function AuthContextProvider(props) {

    const [user, setUser] = useState()
    const [users, setUSers] = useState([])
    const history = useNavigate()
    

    async function login(email, password) {

        const user = recuperaUsuarioLocal(email)

        if(!user) {
            throw "Usuário não encontrado!"
        }

        if(user.password === password) {
            setUser({email, password, saldo: user.saldo})
            history('/')
        } 

        if(user.password !== password){
            throw "Senha incorreta! Tenta novamente"
        }

    }
    async function cadastrar(email, password, confirmPassword) {

        if(password !== confirmPassword) throw 'As senhas não coincidem!'

        const isExists = recuperaUsuarioLocal(email)
        if(isExists) throw "Já existe um usuário com esse e-mail"

        const novoUsuario = {email, password, saldo: 4000}

        users.push(novoUsuario)
        setUser(novoUsuario)
        history('/')
    }

    function alteraSaldoUsuario(valor) {
        const index = users.findIndex(el => el.email === user.email)
        users[index].saldo = valor
    }

    function sair() {
        setUser(null)
        history('/autenticacao')
    }

    function recuperaUsuarioLocal(email) {
        return users.find(user => user.email === email)
    }


    useEffect(() => {
        if(!user) sair()
        return
    }, [user])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            cadastrar,
            sair,
            setUser,
            alteraSaldoUsuario
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext