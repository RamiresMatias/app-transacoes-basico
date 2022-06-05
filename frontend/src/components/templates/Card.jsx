import { useEffect, useState } from 'react'

export default function Card(props) {
    
    const dateEnUs = formatDateIso(null)
    const [id, setId] = useState(null)
    const [date, setDate] = useState(dateEnUs)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)

    const [editMode, setEditMode] = useState(false)

    async function submit(e) {
        e.preventDefault()
        props.saveRelease({date, description, value, type: props.type})
    }

    function formatDateIso(date) {
        const newDate = date ? new Date(date) : new Date()
        return newDate.toISOString().split('T')[0]
    }

    function setValuesRelease(transaction) {
        setDescription(transaction.description)
        setValue(transaction.value)
        setId(transaction.id)
        setDate(formatDateIso(transaction.date))
    }

    function submitEdit(e) {
        e.preventDefault()
        props.updateFn({id, date: new Date(date), description, value})
        clearForm()
    }

    function clearForm() {
        setDescription('')
        setValue(0)
    }

    const bg = props.type === 'D' ? 'bg-red-400' : 'bg-blue-400'

    useEffect(() => {
        if(!props.releaseEdit) return
        setEditMode(true)
        setValuesRelease(props.releaseEdit)
    }, [props?.releaseEdit])

    return (
        <div className="rounded flex flex-col h-full py-6 w-5/6 bg-white">
            <div className="font-bold text-4xl w-full text-center">
                <span className={`
                    inline-block ${bg} rounded-full 
                    px-3 py-1 text-4xl font-semibold 
                    text-gray-700 mr-2 mb-2
                `}>{props.title}</span>  
            </div>
            <div className={`flex flex-col text-xl px-6 mt-2`}>
                <label>Descrição</label>
                <input
                    type='text'
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder='Digite a descrição'
                    className={`
                        px-4 py-3 rounded-lg bg-gray-200
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                    `}
                />
            </div>
            <div className={`flex flex-col text-xl px-6 mt-6`}>
                <label>Valor</label>
                <input
                    type='number'
                    required
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='Digite a valor' 
                    className={`
                        px-4 py-3 rounded-lg bg-gray-200
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                    `}
                />
            </div>
            <div className={`flex flex-col text-xl px-6 mt-6`}>
                <label>Data do Lançamento</label>
                <input
                    type='date'
                    required
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    placeholder='Selecione a data'
                    className={`
                        px-4 py-3 rounded-lg bg-gray-200
                        border focus:border-blue-500 focus:bg-white
                        focus:outline-none
                    `}
                />
            </div>
            <div className={`flex flex-col text-xl px-6 mt-6`}>
                <button onClick={editMode ? submitEdit : submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white
                    rounded-lg px-4 py-3 mt-6
                `}>{editMode ? 'Salvar alteração' : 'Salvar'}</button>
            </div>
    
        </div>
    )
}