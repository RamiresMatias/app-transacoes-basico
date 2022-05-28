import Layout from "../components/templates/Layout"
import Table from "../components/templates/Table"


export default function Extract() {
    
    return (
        <Layout>
            <div className={`
                flex
                justify-center align-center  
                w-full h-full py-5
            `}>
                <Table type={['D', 'R']}/>
            </div>
        </Layout>
    )
}