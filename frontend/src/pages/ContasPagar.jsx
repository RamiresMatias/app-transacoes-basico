import Layout from "../components/Layout"
import CardLancamento from "../components/CardLancamento"
import Tabela from "../components/Tabela"

import '../styles/contas-pagar.css'
import { useEffect, useState } from "react"
import { useApp } from "../data/hook/useApp"

export default function ContasPagar() {

    const {gravarLancamento} = useApp()
    const [tipo] = useState('D')


    return (
        <Layout>
            <CardLancamento 
                titulo="Contas à Pagar"
                gravarLancamento={gravarLancamento}
                tipo={tipo}
            />
            <Tabela tipo={[tipo]}/>
        </Layout>
    )
}