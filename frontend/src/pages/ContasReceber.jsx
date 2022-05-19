import Layout from "../components/Layout"
import CardLancamento from "../components/CardLancamento"
import Tabela from "../components/Tabela"
import '../styles/contas-receber.css'
import { useApp } from "../data/hook/useApp"
import { useState } from "react"

export default function ContasReceber() {

    const {gravarLancamento} = useApp()
    const [tipo] = useState('R')

    return (
        <Layout>
            <CardLancamento 
                titulo="Contas à Receber" 
                gravarLancamento={gravarLancamento}
                tipo={tipo}/>
            <Tabela tipo={[tipo]}/>
        </Layout>
    )
}