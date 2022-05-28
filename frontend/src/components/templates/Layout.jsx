import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'


export default function Layout(props) {

    return (
        <div className={`flex h-full w-full`}>
            <Sidebar />
            <div className={`
                flex flex-col 
                w-full h-full
                bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-gray-800
            `}>
                <Topbar title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}