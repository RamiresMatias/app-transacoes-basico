import Layout from "../components/templates/Layout"
import Card from "../components/templates/Card"
import Table from "../components/templates/Table"


import { useApp } from "../data/hook/useApp"
import { useEffect } from "react"

export default function Receive() {

    const {saveRelease} = useApp()

    return (
        <Layout>
            <Card title="Contas à Receber" type="R" saveRelease={saveRelease}/>
            <Table type={['R']} isEdit colorText="text-emerald-600"/>
        </Layout>
    )
}