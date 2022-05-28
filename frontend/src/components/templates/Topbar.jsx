
import Title from './Title' 
import UserAvatar from './UserAvatar'

export default function Topbar(props) {
 
    
    return (
        <div className={`flex`}>
            <Title title={props.title} subtitle={props.subtitle}></Title>
            <div className={`flex flex-grow justify-end items-center`}>
                <UserAvatar className={`ml-3`}></UserAvatar>
            </div>
        </div>
    )
}