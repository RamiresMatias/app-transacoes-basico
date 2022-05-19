import {Link} from 'react-router-dom'

export default function SidebarItems(props) {
    return (
        <Link to={props.url}>
           <span>{props.icon}</span>
           <li>{props.texto}</li>
        </Link>
    )
}