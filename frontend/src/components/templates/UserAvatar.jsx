import {Link} from 'react-router-dom'

export default function UserAvatar(props) {
   
    return (
        <div>
            <img 
                src={'/images/avatar.svg'} 
                alt="Avatar do usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `} 
            />
        </div>
    )
}