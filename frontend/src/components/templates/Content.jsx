
export default function Content(props){
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
            w-full
            py-4
            justify-center items-center
        `}>
            {props.children}
        </div>
    )
}