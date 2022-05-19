import '../styles/auth.css'
import AuthInput from '../components/AuthInput'
import { useState } from 'react'
import { useAuth } from '../data/hook/useAuth'

export default function Auth() {

    const [senha, setSenha] = useState(null)
    const [confirmaSenha, setConfirmaSenha] = useState(null)
    const [email, setEmail] = useState(null)
    const [error, setError] = useState()
    const [isCadastrar, setIsCadastrar] = useState(false)
    const {login, cadastrar} = useAuth()

    function showError(msg) {
        console.log({...msg});
        setError(msg)
        setTimeout(() => setError(null), 5000)
    }

    async function submit(tipo) {
        try {
            if(tipo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha, confirmaSenha)
                setIsCadastrar(false)
            }
        } catch (error) {
            showError(error)
        }
    }

    const titulo = isCadastrar ? 'Cadastrar' : 'Login'
  
    return (
        <div className="auth">
            <div className="card-auth">
                <div className='card-header-auth'>
                    <h1 className='title'>{titulo}</h1>
                </div>
                <div className='card-content-auth'>
                    {error ? (
                        <div className='error'>
                            {error}
                        </div>
                    ): false}
                    <AuthInput 
                        titulo="E-mail" 
                        tipo="email" 
                        valor={email} 
                        alterarValor={setEmail}
                        placeholder="Digite seu e-mail"
                    />
                    <AuthInput 
                        titulo="Senha" 
                        tipo="password" 
                        valor={senha} 
                        alterarValor={setSenha}
                        placeholder="Digite sua senha"
                    />
                    {
                        isCadastrar ? (
                            <AuthInput 
                                titulo="Confirme sua senha" 
                                tipo="password" 
                                valor={confirmaSenha} 
                                alterarValor={setConfirmaSenha}
                                placeholder="Digite sua senha novamente"
                            />
                        ) : false
                    }
                    {
                        !isCadastrar ? (
                            <>
                                <button className='button-gravar' onClick={() => submit('login')}>Login</button>
                                <button className='button-blue' onClick={() => setIsCadastrar(true)}>Cadastrar uma conta</button>
                            </>
                        ) : (
                            <>
                                <button className='button-gravar' onClick={() => submit()}>Salvar</button>
                                <button className='button-blue' onClick={() => setIsCadastrar(false)}>Já possuo conta, fazer login</button>
                            </>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )
}