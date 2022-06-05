import moment from "moment"
import { useApp } from "../../data/hook/useApp"

export default function TableExtract(props) {

    const {listTransactions} = useApp()

    const formataData = (date) => {
        return moment(date).utc().format('DD/MM/YYYY')
    }

   
    function renderizaTabela() {
        return listTransactions
            .filter(el => props.type.includes(el.type))
            .map((row, index) => {
                const isDespesa = row.type === 'D'
                const colorText = isDespesa ? 'text-red-900' : 'text-emerald-900'
            return ( 
                    <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" 
                    key={index}>
                        <th className="px-6 py-4 border border-slate-300">{formataData(row.date)}</th>
                        <th className={`px-6 py-4 font-medium border border-slate-300 ${colorText}`}>{row.value}</th>
                        <th className="px-6 py-4 border border-slate-300">{row.description}</th>
                        <th className="px-6 py-4 border border-slate-300">{isDespesa ? 'Despesa' : 'Receita'}</th>
                    </tr>
                )
            })
    }

    return (
        <div className={`
            rounded-lg 
            flex flex-col justify-center align-center 
            w-full h-full 
            w-5/6 bg-white border mt-6
        `}>
            <h1 className="text-center text-4xl font-bold pt-3 pb-10 tracking-wide">Lançamentos</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {renderizaTabela()}
                </tbody>
            </table>
        </div>
    )
}