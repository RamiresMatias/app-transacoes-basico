import { useApp } from "../../data/hook/useApp"
import moment from 'moment'

export default function Table(props) {

    const {listTransactions} = useApp()

    const formataData = (date) => {
        return moment(date).utc().format('DD/MM/YYYY')
    }

    const isSameDate = (date) => {
        const now = moment().utc().format('DD/MM/YYYY')
        const dateRelease = moment(date).utc().format('DD/MM/YYYY')
        return !(moment(dateRelease).isSameOrAfter(now))
    }
   
    function renderizaTabela() {
        return listTransactions
            .filter(el => props.type.includes(el.type))
            .map((row, index) => {
            return ( 
                    <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
                    key={index}>
                        <th className="px-6 py-4 border border-slate-300">{formataData(row.date)}</th>
                        <th className={`px-6 py-4 font-medium border border-slate-300 ${props.colorText}`}>{row.value}</th>
                        <th className="px-6 py-4 border border-slate-300">{row.description}</th>
                        <th className="px-6 py-4 border border-slate-300">{row.type === 'D' ? 'Despesa' : 'Receita'}</th>
                        {props.isEdit ? <td className="px-6 py-4 text-center">
                            <button 
                                type="button" 
                                onClick={() => props.editRelease(row)}
                                disabled={isSameDate(row.date)}
                                className="disabled:opacity-50 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                            >Editar</button>
                        </td>: false}
                    </tr>
                )
            })
    }

    return (
        <div className={`
            rounded-lg 
            flex flex-col justify-center align-center 
            w-5/6 h-full 
            p-1 bg-white border mt-6
        `}>
            <h1 className="text-center text-4xl font-bold pt-3 pb-10 tracking-wide	">Lançamentos</h1>
            <table className={`
                w-full h-full text-sm text-center text-gray-500 
                dark:text-gray-400 border-collapse
            `}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 border border-slate-300">
                            Data do Lançamento
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-300">
                            Valor
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-300">
                            Descrição
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-300">
                            Tipo
                        </th>
                        <th scope="col" className="px-6 py-3 border border-slate-300">
                            Editar
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