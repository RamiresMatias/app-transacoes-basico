import {Link} from 'react-router-dom'

export default function SidebarItems(props) {

    function renderizarConteudo() {
        return (
            <div className={`
                flex flex-col 
                justify-center items-center
                w-20 h-20 
                dark:text-gray-200
                text-center
                text-gray-700 ${props.className}`
            }>
                {props.icon}
                <span className={`
                    text-xs font-light
                `}>
                    {props.text}
                </span>
            </div>
        )
    }

    return (
        <li
        onClick={props.onClick}
        className={`
            hover:bg-gray-400
            dark:hover:bg-gray-700 
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url} to={props.url}>
                    {renderizarConteudo()}
                </Link>
            ) : (
                renderizarConteudo()
            )}     
        </li>
    )
}