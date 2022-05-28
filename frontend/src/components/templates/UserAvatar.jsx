import {Link} from 'react-router-dom'

export default function UserAvatar(props) {
   
    return (
        <div 
            onMouseEnter={props.showInfo} 
            onMouseLeave={props.hidleInfo}
            className={`
                h-12 w-12 
                flex justify-center align-center
            `}>
            <img 
                src={'/images/avatar.svg'} 
                alt="Avatar do usuário"
                className={`
                    h-full w-full rounded-full cursor-pointer
                    ${props.className}
                `} 
            />
        </div>
    )
}