import '../app.css'
import SidebarItems from './SidebarItems'
import {extratoIcon, contasPagarIcon, homeIcon, exitIcon} from '../icons/allIcons'
import { useAuth } from '../data/hook/useAuth'


export default function Sidebar() {

    const {sair} = useAuth()

    return (
        <nav className="nav">
            <ul className='lista-menu'>
               <SidebarItems url="/" texto="Home" icon={homeIcon}></SidebarItems>
               <SidebarItems url="/contas-pagar" texto="Contas à Pagar" icon={contasPagarIcon}></SidebarItems>
               <SidebarItems url="/contas-receber" texto="Contas à Receber" icon={extratoIcon}></SidebarItems>
               <SidebarItems url="/extrato" texto="Extrato" icon={extratoIcon}></SidebarItems>
            </ul>
            <ul className='menu-sair'>
                <li onClick={sair}><span>{exitIcon}</span>Sair</li>
            </ul>
        </nav>
    )
}