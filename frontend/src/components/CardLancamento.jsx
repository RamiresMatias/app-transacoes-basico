import { useState } from 'react'
import '../app.css'

export default function CardLancamento(props) {

    const [data, setData] = useState()
    const [descricao, setDescricao] = useState()
    const [valor, setValor] = useState()

    function submit() {
        props.gravarLancamento({data, descricao, valor, tipo: props.tipo})
    }

    return (
        <div className="card">
            <div className='card-header'>
                <h1 className='title'>{props.titulo}</h1>
            </div>
            <div className='card-content'>
                <div className='input-group'>
                    <label>Descrição</label>
                    <input 
                        type="text" 
                        required
                        placeholder='Digite a descrição' 
                        onChange={(e) => setDescricao(e?.target?.value)}
                        />
                </div>
                <div className='input-group'>
                    <label>Valor: R$</label>
                    <input 
                        type="number"
                        required 
                        placeholder='Digite um valor' 
                        onChange={(e) => setValor(e?.target?.value)}
                        />
                </div>
                <div className='input-group'>
                    <label>Data do Lançamento</label>
                    <input 
                        type="date"
                        required 
                        placeholder='Selecione a data'
                        onChange={(e) => setData(e?.target?.value)}
                        />
                </div>
                <button className='button-gravar' onClick={submit}>Gravar</button>
            </div>
        </div>
    )
}