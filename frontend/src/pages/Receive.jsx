import Layout from "../components/templates/Layout"
import Card from "../components/templates/Card"
import Table from "../components/templates/Table"
import { useState } from "react"
import { useApp } from "../data/hook/useApp"

export default function Receive() {

    const {saveRelease, update} = useApp()

    const [releaseEdit, setReleaseEdit] = useState()

    function editRelease(row) {
        window.scrollTo(0, 0)
        setReleaseEdit(row)
    }

    return (
        <Layout>
            <Card 
                title="Contas à Receber"
                type="R" 
                saveRelease={saveRelease} 
                releaseEdit={releaseEdit}
                updateFn={update}
            />
            <Table type={['R']} isEdit colorText="text-emerald-600" editRelease={editRelease}/>
        </Layout>
    )
}