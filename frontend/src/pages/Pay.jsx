import Layout from "../components/templates/Layout"
import Card from "../components/templates/Card"
import Table from "../components/templates/Table"

import { useApp } from "../data/hook/useApp"

export default function Pay() {

    const {saveRelease} = useApp()

    return (
        <Layout>
            <Card title="Contas à Pagar" type="D" saveRelease={saveRelease}/>
            <Table type={['D']} isEdit colorText='text-red-600'/>
        </Layout>
    )
}