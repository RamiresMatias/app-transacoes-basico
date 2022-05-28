import Layout from '../components/templates/Layout'


export default function Home() {
    return (
        <Layout>
            <div className='h-screen w-full flex flex-col align-center justify-start text-center'>
                <h2 className="text-4xl font-bold mb-2 text-white">
                    App básico de transações
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                    Utilize o menu lateral para navegar.
                </h3>
            </div>
        </Layout>
    )
}