
export default function Content(props){
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
            h-full w-full
            justify-center items-center
        `}>
            {props.children}
        </div>
    )
}