import Layout from "../components/templates/Layout"
import Card from "../components/templates/Card"
import Table from "../components/templates/Table"

import { useApp } from "../data/hook/useApp"
import { useState } from "react"

export default function Pay() {

    const {saveRelease, update} = useApp()

    const [releaseEdit, setReleaseEdit] = useState()

    function editRelease(row) {
        window.scrollTo(0, 0)
        setReleaseEdit(row)
    }
    
    return (
        <Layout>
            <Card 
                title="Contas à Pagar" 
                type="D" 
                saveRelease={saveRelease} 
                releaseEdit={releaseEdit}
                updateFn={update}
            />
            <Table type={['D']} isEdit colorText='text-red-600' editRelease={editRelease}/>
        </Layout>
    )
}