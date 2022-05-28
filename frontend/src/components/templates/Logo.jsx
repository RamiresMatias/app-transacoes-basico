import { Money } from "../icons";

export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center
            bg-white rounded-full
            w-12 h-12
        `}>
            {Money}
        </div>
    )
}