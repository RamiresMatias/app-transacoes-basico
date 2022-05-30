import { useAuth } from "../../data/hook/useAuth"

export default function CardProfile() {

    const {user} = useAuth()

    return (
        <div className={`
            rounded bg-white 
            w-60 h-20 flex 
            px-2 py-4
            text-sm text-gray-700
            flex-col align-center justify-around
            flex-wrap
        `}>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}