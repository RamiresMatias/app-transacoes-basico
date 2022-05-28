import { useApp } from "../../data/hook/useApp"

export default function Balance() {

    const {balance} = useApp()

    return (
        <div className="font-bold text-4xl w-full text-center">
            <span className={`
                inline-block
                px-3 py-1 text-4xl font-semibold 
                text-white mr-2 mb-2
            `}>Saldo: {balance}</span>  
        </div>
    )
}