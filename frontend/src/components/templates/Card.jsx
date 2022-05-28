import { useState } from 'react'

export default function Card(props) {
    
    const [date, setDate] = useState()
    const [description, setDescription] = useState()
    const [value, setValue] = useState()

    async function submit(e) {
        e.preventDefault()
        props.saveRelease({date, description, value, type: props.type})
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const bg = props.type === 'D' ? 'bg-red-400' : 'bg-blue-400' 

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
                    onChange={handleDescription}
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
                    onChange={handleValue}
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
                    onChange={handleDate}
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
                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white
                    rounded-lg px-4 py-3 mt-6
                `}>Salvar</button>
            </div>
    
        </div>
    )
}