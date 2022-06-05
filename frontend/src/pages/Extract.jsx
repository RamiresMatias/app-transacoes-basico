import Layout from "../components/templates/Layout"
import Table from "../components/templates/Table"
import TableExtract from "../components/templates/TableExtract"


export default function Extract() {
    
    return (
        <Layout>
            <TableExtract type={['D', 'R']}/>
        </Layout>
    )
}