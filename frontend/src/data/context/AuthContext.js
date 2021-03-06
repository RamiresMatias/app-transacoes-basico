import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../axios'
import cookies from 'js-cookie'

const AuthContext = createContext({})

function manageCookie(logged, expires) {
    if(logged) {
        cookies.set('user-auth', logged, {
            expires: 1/56,
        })
    } else {
        cookies.remove('user-auth')
    }
}

export function AuthContextProvider(props) {

    const [user, setUser] = useState()
    const history = useNavigate()
    const [loading, setLoading] = useState(true)
    
    async function login(email, password) {
        try {
            setLoading(true)
            const {data} = await api.signin(email, password)
            await setUpSession(data)
            history('/')
        } catch (error) {
            await setUpSession(false, null)
            throw error?.response.data ?? 'Erro ao realizar login'
        } finally {
            setLoading(false)
        }
    }

    async function register(newUser) {
        try {
            const {password, confirmPassword} = newUser
            if(password !== confirmPassword) throw 'As senhas não coincidem!'

            await api.register({...newUser, status: true})
            history('/autenticacao')

        } catch (error) {
            throw error?.response.data ?? 'Erro ao realizar cadastro'
        }
    }

    function logout() {
        setUpSession(null)
        history('/autenticacao')
    }

    async function setUpSession(user) {
        if(user) {
            setUser(user)
            manageCookie(true, user.exp)
            setLoading(false)
            sessionStorage.setItem('user', JSON.stringify(user))
            return user.email
        }else {
            setUser(null)
            manageCookie(false, null)
            setLoading(false)
            sessionStorage.removeItem('user')
            return false
        }
    }

    useEffect(() => {
        const isCookies = cookies.get('user-auth')
        const invalid = [false, 'false']

        const user = JSON.parse(sessionStorage.getItem('user'))

        if(invalid.includes(isCookies) || !user) {
            setUpSession(null)
            history('/autenticacao')
        }

        setUser(user)
        
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            setUser,     
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext