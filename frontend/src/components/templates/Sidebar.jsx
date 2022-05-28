import {HomeIcon, contasPagarIcon, extratoIcon, LogoutIcon} from '../icons/index'
import SidebarItems from './SidebarItems'
import Logo from './Logo'
import { useAuth } from '../../data/hook/useAuth'

export default function Sidebar(){

    const {logout} = useAuth()
 
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 
            dark:text-gray-200
            `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
            <SidebarItems url="/" text="Home" icon={HomeIcon}></SidebarItems>
               <SidebarItems url="/contas-pagar" text="Contas à Pagar" icon={contasPagarIcon}></SidebarItems>
               <SidebarItems url="/contas-receber" text="Contas à Receber" icon={extratoIcon}></SidebarItems>
               <SidebarItems url="/extrato" text="Extrato" icon={extratoIcon}></SidebarItems>
            </ul>
            <ul>
                <SidebarItems 
                    text='Sair' 
                    icon={LogoutIcon}
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400 
                        dark:hover:text-white
                        hover:bg-red-500 hover:text-white`}
                ></SidebarItems>
            </ul>
        </aside>
    )
}