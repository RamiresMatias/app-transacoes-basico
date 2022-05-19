import { useApp } from "../data/hook/useApp"
import { useAuth } from "../data/hook/useAuth"

export default function Tabela(props) {

    const classDespesaReceita = (tipo) => tipo === 'D' ? 'despesa' : 'receita'
    const {lancamentos} = useApp()
    const {user} = useAuth()

    const formataData = (data) => new Date(data).toLocaleDateString('pt-br')
    
    function renderizaTabela() {
        return lancamentos
            .filter(el => el.user === user.email)
            .filter(el => props.tipo.includes(el.tipo))
            .map((row, index) => {
            return ( 
                    <tr key={index}>
                        <td>{formataData(row.data)}</td>
                        <td>{row.descricao}</td>
                        <td className={classDespesaReceita(row.tipo)}>{row.valor}</td>
                        <td>{row?.tipo && row.tipo === 'D' ? 'Despesa' : 'Receita'}</td>
                    </tr>
                )
            })
    } 
    
    return (
        <div className="container-tabela">
            <table className="tabela">
                <thead>
                    <tr>
                        <th scope="col">Data de Lançamento</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizaTabela()}
                </tbody>
            </table>
        </div>
    )
}