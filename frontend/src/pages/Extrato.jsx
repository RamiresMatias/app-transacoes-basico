import Layout from "../components/Layout"
import TabelaExtrato from "../components/TabelaExtrato"
import '../styles/extrato.css'

export default function Extrato() {
    
    return (
        <Layout>
            <h1>Extrato</h1>
            <div className="extrato">
                <TabelaExtrato />
            </div>
        </Layout>
    )
}