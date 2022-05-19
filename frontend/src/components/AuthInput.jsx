export default function AuthInput(props) {
    return (
        <div className='input-group-auth'>
            <label>{props.titulo}</label>
            <input 
                type={props.tipo} 
                placeholder={props.placeholder} 
                value={props?.valor || ''}
                onChange={e => props.alterarValor?.(e.target.value)}
                required
            />
        </div>
    )
}