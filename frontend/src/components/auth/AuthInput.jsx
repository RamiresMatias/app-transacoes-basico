
export default function AuthInput(props) {
    return props.notRendering ? null : (
        <div className={`flex flex-col mt-5`}>
            <label>{props.label}</label>
            <input
                type={props.type} 
                value={props.value}
                required={props.required}
                onChange={e => props.changeValue?.(e.target.value)}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
            />
        </div>
    )
} 