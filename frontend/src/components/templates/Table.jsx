import { useApp } from "../../data/hook/useApp"

export default function Table(props) {

    const {listTransactions} = useApp()

    const formataData = (data) => new Date(data).toLocaleDateString('pt-br')

    async function editTransaction(row) {
        // Lógica para editar
    }
   
    function renderizaTabela() {
        return listTransactions
            .filter(el => props.type.includes(el.type))
            .map((row, index) => {
            return ( 
                    <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
                    key={index}>
                        <th className="px-6 py-4">{formataData(row.date)}</th>
                        <th className={`px-6 py-4 font-medium ${props.colorText}`}>{row.value}</th>
                        <th className="px-6 py-4">{row.description}</th>
                        <th className="px-6 py-4">{row.type === 'D' ? 'Despesa' : 'Receita'}</th>
                        {props.isEdit ? <td className="px-6 py-4 text-right">
                            <button 
                                type="button" 
                                onClick={() => editTransaction(row)}
                                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                            >Editar</button>
                        </td>: false}
                    </tr>
                )
            })
    }

    return (
        <div className={`
            rounded-lg 
            flex justify-center align-center 
            w-5/6 h-full 
            p-1 bg-white border mt-6
        `}>
            <table className={`
                w-full h-full text-sm text-center text-gray-500 
                dark:text-gray-400
            `}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Data do Lançamento
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Valor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Descrição
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Editar</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderizaTabela()}
                </tbody>
            </table>
        </div>
    )
}