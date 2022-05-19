import '../app.css'
import { useAuth } from '../data/hook/useAuth'


export default function Header() {

    const {user} = useAuth()

    return (
        <header className="header">
            <div className='logo'></div>
            <p className='title-app'>App Transações</p>
            <div className='saldo'>
                <h6>Saldo:</h6>
                <p>R$ {user?.saldo || 0}</p>
            </div>
        </header>
    )
}