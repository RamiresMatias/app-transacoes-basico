
import { useState } from 'react';
import Balance from './Balance';
import CardProfile from './CardProfile'
import UserAvatar from './UserAvatar'

export default function Topbar(props) {

    const [show, setShow] = useState(false)
 
    function showInfo(e) {
        setShow(true)
    }

    function hidleInfo(e) {
        setShow(false)
    }
    
    return (
        <div className={`flex p-4 justify-between align-center`}>
            <div>
                <Balance />
            </div>
            <div className={`flex justify-end items-center`}>
                {show ? <CardProfile /> : false}
                <UserAvatar className={`ml-3`} showInfo={showInfo} hidleInfo={hidleInfo}></UserAvatar>
            </div>
        </div>
    )
}