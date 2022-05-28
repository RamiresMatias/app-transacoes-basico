import { useState } from 'react'
import { useAuth } from '../data/hook/useAuth'
import { WarningIcon } from "../components/icons/index"
import AuthInput from '../components/auth/AuthInput'

export default function Auth() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState()
    const [mode, setMode] = useState('login')
    const {login, register} = useAuth()

    function showError(msg) {
        setError(msg)
        setTimeout(() => setError(null), 5000)
    }

    async function submit() {
        try {
            if(mode === 'login') {
                await login(email, password)
            } else {
                const newUser = {
                    username, 
                    email, 
                    password, 
                    confirmPassword
                }
                await register(newUser)
                resetForm()
            }
        } catch (error) {
            showError(error)
        }
    }

    function resetForm() {
        setPassword('')
        setConfirmPassword('')
        setEmail('')
        setUsername('')
        setMode('login')
    }
  
    return (
        <div className={`
        flex h-screen items-center justify-center
        `}>
            <div className="hidden md:block md:w-1/2">
                <img 
                    src="https://cdn.pixabay.com/photo/2016/02/16/16/57/login-1203603_960_720.png" 
                    alt="Imagem da Tela de autenticação" 
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className={`md:w-1/2 w-full m-10`}>
                <h1 className={`
                    text-3xl font-bold mb-5
                `}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Registre-se na plataforma'}
                </h1>

                {error ? (
                    <div className={`
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-800 rounded-lg
                        flex items-center
                    `}>
                        {WarningIcon}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : false}

                <AuthInput
                    label="Nome de usuário"
                    type={'text'}
                    value={username}
                    notRendering={mode === 'login'}
                    changeValue={setUsername}
                    required
                />

                <AuthInput
                    label="Email"
                    value={email}
                    type={'email'}
                    changeValue={setEmail}
                    required
                />
                <AuthInput
                    label="Senha"
                    type={'password'}
                    value={password}
                    changeValue={setPassword}
                    required
                />

                <AuthInput
                    label="Confirme a Senha"
                    type={'password'}
                    value={confirmPassword}
                    notRendering={mode === 'login'}
                    changeValue={setConfirmPassword}
                    required
                />

                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white
                    rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Registre-se'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                {mode === 'login' ? (
                    <p className="text-center">
                        <a onClick={() => setMode('register')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer`}>
                            Criar uma conta gratuitamente?
                        </a>
                    </p>
                ): (
                    <p className="text-center">
                        <a onClick={() => setMode('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer`}>
                            Entre com suas credenciais?
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}